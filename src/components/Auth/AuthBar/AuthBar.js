import { useState } from "react";
import { LoginForm } from "../../../../src/components/Auth/Login/LoginForm";
import icons from "../../../sprite.svg";

import {
  SvgLogin,
  AuthList,
  AuthContainer,
  RegLi,
  LoginModal,
  RegModal,
  BtnLogin,
  BtnReg,
} from "./AuthBar.styled.js";
import { RegistrationForm } from "../Registration/RegistrationForm.js";

export const AuthBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const openRegModal = () => {
    setIsRegModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeRegModal = () => {
    setIsRegModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <AuthContainer>
        <SvgLogin width="20px" height="20px">
          <use href={`${icons}#icon-login`}></use>
        </SvgLogin>
        <AuthList>
          <li>
            <BtnLogin type="button" onClick={openLoginModal}>
              Log in
            </BtnLogin>
          </li>
          <RegLi onClick={openRegModal}>
            <BtnReg type="button">Registration</BtnReg>
          </RegLi>
        </AuthList>
      </AuthContainer>

      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
        <LoginForm closeModal={closeLoginModal} />
      </LoginModal>

      <RegModal isOpen={isRegModalOpen} onRequestClose={closeRegModal}>
        <RegistrationForm closeModal={closeRegModal} />
      </RegModal>
    </>
  );
};
