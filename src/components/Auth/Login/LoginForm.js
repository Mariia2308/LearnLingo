import { Formik, Form } from "formik";
import * as Yup from "yup";
import icons from "../../../sprite.svg";
import {
  FormContainer,
  CloseBtn,
  Title,
  Text,
  InputsContainer,
  Label,
  InputField,
  DIV,
  Error,
  AuthBtn,
  StyledSvg,
} from "../AuthBar/CommonStylesForModal.styled";
import { useState } from "react";

import { login } from "../../../../src/components/firebase/firebase";
import { useDispatch } from "react-redux";
import { addToken } from "../../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { Toaster } from "../../Toaster/Toaster";

export const LoginForm = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handlePassVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;
    try {
      const user = await login(email, password);

      dispatch(addToken(user.accessToken));
      actions.resetForm();
      closeModal();
    } catch (error) {
      return toast.warning(error.message);
    }
  };

  const LogInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: "Email error",
        excludeEmptyString: true,
      })
      .required("Email is required"),
    password: Yup.string()
      .min(8, "At least 8 characters")
      .max(64, "No more than 64 characters")
      .matches(/^[a-zA-Z0-9!@#$%^&*]{8,64}/, {
        message: "Include Latin letters and numbers without spaces",
        excludeEmptyString: true,
      })
      .required("Password is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form>
            <FormContainer>
              <CloseBtn type="button" onClick={closeModal}>
                <svg width="32px" height="32px">
                  <use href={`${icons}#icon-modal-cross`}></use>
                </svg>
              </CloseBtn>
              <div>
                <Title>Log in</Title>
                <Text>
                  Welcome back! Please enter your credentials to access your
                  account and continue your search for an teacher.
                </Text>
              </div>
              <InputsContainer>
                <DIV>
                  <Error name="email" component="div" />
                  <InputField name="email" placeholder=" " />
                  <Label htmlFor="email">Email</Label>
                </DIV>
                <DIV>
                  <Error name="password" component="div" />
                  <InputField
                    name="password"
                    placeholder=" "
                    type={showPassword ? "text" : "password"}
                  />
                  <Label htmlFor="password">Password</Label>
                  <StyledSvg onClick={handlePassVisibility}>
                    {showPassword ? (
                      <svg width="20px" height="20px">
                        <use stroke="gray" href={`${icons}#icon-eye`} />
                      </svg>
                    ) : (
                      <svg width="20px" height="20px">
                        <use href={`${icons}#icon-eye-hiden`} />
                      </svg>
                    )}
                  </StyledSvg>
                </DIV>
              </InputsContainer>
              <div>
                <AuthBtn type="submit">Log in</AuthBtn>
              </div>
            </FormContainer>
          </Form>
        )}
      </Formik>
      <Toaster />
    </>
  );
};
