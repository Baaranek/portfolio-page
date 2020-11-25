import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <StyledForm onSubmit={onSubmit}>
        <div>
          <StyledInput
            placeholder="Email"
            type="text"
            autoComplete="off"
            name="email"
            ref={register({
              required: true,
              minLength: 6,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
          />
          {errors.email && (
            <ErrorInput
              initial={{ width: '1vw' }}
              animate={{ width: '20vw' }}
              transition={{ duration: 0.5 }}
              exit={{ width: '1vw' }}
            />
          )}
        </div>
        <div>
          <StyledInput
            placeholder="Subject"
            type="text"
            autoComplete="off"
            name="subject"
            ref={register({
              required: true,
              minLength: 5,
            })}
          />
          {errors.subject && (
            <ErrorInput
              initial={{ width: '1vw' }}
              animate={{ width: '20vw' }}
              transition={{ duration: 0.5 }}
              exit={{ width: '1vw' }}
            />
          )}
        </div>
        <TextAreaDiv>
          <StyledTextArea
            placeholder="Message"
            autoComplete="off"
            name="message"
            ref={register({
              required: true,
              minLength: 10,
            })}
          />
          {errors.message && (
            <ErrorInput
              initial={{ width: '1vw' }}
              animate={{ width: '20vw' }}
              transition={{ duration: 0.5 }}
              exit={{ width: '1vw' }}
            />
          )}
        </TextAreaDiv>
        <Button type="submit">Submit!</Button>
      </StyledForm>
    </Wrapper>
  );
};

const TextAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  margin: 1rem 0 0;
  background-color: ${({ theme }) => theme.colors.form};
  color: ${({ theme }) => theme.colors.icon};
  border: 1px solid ${({ theme }) => theme.colors.form};

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
  margin: 1rem 0 0;
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

const ErrorInput = styled(motion.div)`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.active};
`;

const Button = styled.button`
  position: relative;
  font-size: 1rem;
  letter-spacing: 4px;
  line-height: 2.5rem;
  display: block;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.active};
  background-color: transparent;
  border-radius: 0.1rem;
  width: 10rem;
  height: 2.5rem;
  margin-top: 3rem;

  :focus {
    outline: none;
  }
`;

export default Contact;
