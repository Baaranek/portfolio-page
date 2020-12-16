import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ContactTextTemplate } from '@utils/textTemplates';
import letterVariants from '@utils/letterVariants';
import Asteroid from '@components/common/Asteroid/Asteroid';
import media from '@utils/media';
import emailjs from 'emailjs-com';

// Layout
import LeftWrapper from '@layout/LeftWrapper/LeftWrapper';
import RightWrapper from '@layout/RightWrapper/RightWrapper';
import ComponentWrapper from '@layout/ComponentWrapper/ComponentWrapper';

const ErrorVariants = {
  initial: { width: '1vw' },
  animate: { width: '80%', transition: { duration: 0.5 } },
  exit: { width: '1vw' },
};

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });
  const [isSent, setIsSent] = useState(false);

  const sendFormConfirm = () => {
    setIsSent(!isSent);
  };

  const onSubmit = (data, e) => {
    emailjs
      .send(
        'service_uyj8wee',
        'template_my2d0en',
        data,
        'user_E1UvYiAMBYWTGGoRxEPHP'
      )
      .then(
        (result) => {
          console.log(result.text);
          sendFormConfirm();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {isSent && <MessageInfo>Message Sent!</MessageInfo>}
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
                initial="initial"
                animate="animate"
                exit="exit"
                variants={ErrorVariants}
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
                initial="initial"
                animate="animate"
                exit="exit"
                variants={ErrorVariants}
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
                initial="initial"
                animate="animate"
                exit="exit"
                variants={ErrorVariants}
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
      <RightWrapper>
        <Asteroid />
      </RightWrapper>
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
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.active};

  ${media.tablet`
  font-size: 3rem;
  `}
`;

const TextAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-right: 6rem;

  @media (min-width: 780px) and (max-width: 1024px) {
    padding: 0;
  }

  ${media.small`
    padding: 0;
  `}
`;

const StyledInput = styled(motion.input)`
  width: 80%;
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

const StyledTextArea = styled(motion.textarea)`
  width: 80%;
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
  background-color: ${({ theme }) => theme.colors.error};
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
  transition: all 1s;
  background-size: 200%;
  background-position: 100% 0;
  background-image: linear-gradient(45deg, #ed6337 50%, transparent 50%);

  :focus {
    outline: none;
  }

  :hover {
    background-position: 0 100%;
    color: ${({ theme }) => theme.colors.ground};
  }
`;

const MessageInfo = styled.p`
  color: green;
`;

export default Contact;
