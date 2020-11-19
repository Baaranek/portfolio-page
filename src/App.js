import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '@layout/MainLayout/MainLayout';
import Home from '@views/Home/Home';
import About from '@views/About/About';
import Skills from '@views/Skills/Skills';
import Contact from '@views/Contact/Contact';
import NotFound from '@views/NotFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;
