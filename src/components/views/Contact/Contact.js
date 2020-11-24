import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button/Button';
import { motion } from 'framer-motion';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  console.log(email, subject, message);

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <StyledForm>
        <StyledInput
          placeholder="Email"
          type="email"
          autoComplete="off"
          onChange={(e) => setEmail({ email: e.target.value })}
        />
        <StyledInput
          placeholder="Subject"
          type="text"
          autoComplete="off"
          onChange={(e) => setSubject({ subject: e.target.value })}
        />
        <StyledTextArea
          placeholder="Message"
          autoComplete="off"
          onChange={(e) => setMessage({ message: e.target.value })}
        />
        <Button title={'Send!'} path={'0'} />
      </StyledForm>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 20vw;
  height: 3rem;
  padding: 1rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.form};
  color: ${({ theme }) => theme.colors.icon};
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.icon};
  }
  :focus {
    outline: none;
    color: ${({ theme }) => theme.colors.icon};

    ::placeholder {
      color: transparent;
    }
  }
`;

const StyledTextArea = styled.textarea`
  width: 20vw;
  height: 5rem;
  padding: 1rem;
  margin: 0.5rem;
  resize: none;
  background-color: ${({ theme }) => theme.colors.form};
  color: ${({ theme }) => theme.colors.icon};
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.icon};
  }

  :focus {
    color: ${({ theme }) => theme.colors.icon};
    outline: none;

    ::placeholder {
      color: transparent;
    }
  }
`;

export default Contact;
