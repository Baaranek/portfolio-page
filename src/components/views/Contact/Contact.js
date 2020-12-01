import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ContactTextTemplate } from '@utils/textTemplates';
import letterVariants from '@utils/letterVariants';
import Asteroid from '@components/common/Asteroid/Asteroid';
import { useMediaQuery } from 'react-responsive';
import media from '@utils/media';

// Layout
import LeftWrapper from '@layout/LeftWrapper/LeftWrapper';
import RightWrapper from '@layout/RightWrapper/RightWrapper';
import ComponentWrapper from '@layout/ComponentWrapper/ComponentWrapper';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const isDesktop = useMediaQuery({ minWidth: 1224 });

  return (
    <ComponentWrapper>
      <LeftWrapper>
        <HeaderDiv>
          {ContactTextTemplate.map(({ id, letter, delay }) => (
            <MotionSpan
              key={id}
              initial="hidden"
              animate="visible"
              transition={{
                delay: delay,
                duration: 0.3,
              }}
              variants={letterVariants}
            >
              {letter}
            </MotionSpan>
          ))}
        </HeaderDiv>
        <StyledForm onSubmit={onSubmit}>
          <div>
            <StyledInput
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.2,
              }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.4,
              }}
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
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
            }}
            type="submit"
          >
            Submit!
          </Button>
        </StyledForm>
      </LeftWrapper>
      <RightWrapper>{isDesktop && <Asteroid />}</RightWrapper>
    </ComponentWrapper>
  );
};

const HeaderDiv = styled.div`
  > :nth-child(7) {
    padding-right: 1rem;
  }
`;

const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.active};
`;

const TextAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(motion.input)`
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

  ${media.phone`
  width: 80%;
  `}
`;

const StyledTextArea = styled(motion.textarea)`
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
  ${media.phone`
  width: 80%;
  `}
`;

const ErrorInput = styled(motion.div)`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.active};
`;

const Button = styled(motion.button)`
  position: relative;
  font-size: 1rem;
  letter-spacing: 4px;
  line-height: 2.5rem;
  display: block;
  text-align: center;
  border: 1px solid #ed6337;
  color: #ed6337;
  background-color: transparent;
  border-radius: 0.2rem;
  width: 10rem;
  height: 2.5rem;
  margin-top: 3rem;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    background-color: #ed6337;
    color: ${({ theme }) => theme.colors.ground};
  }
`;

export default Contact;
