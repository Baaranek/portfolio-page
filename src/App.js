import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import MainLayout from '@layout/MainLayout/MainLayout';
import Home from '@views/Home/Home';
import About from '@views/About/About';
import Skills from '@views/Skills/Skills';
import Contact from '@views/Contact/Contact';
import NotFound from '@views/NotFound/NotFound';

import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <MainLayout>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;
