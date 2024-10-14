import {
  Greeting,
  UserInfoContainer,
  UserName,
  LogOutBtn,
} from "./UserInfo.styled";
import { auth, logout } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { Loader } from "../../Loader/Loader";
import { removeToken } from "../../../redux/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "../../Toaster/Toaster";
import { useState } from "react";

export const UserInfo = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const userName = auth.currentUser.displayName;

  <Toaster />;

  const handleLogOut = async () => {
    try {
      await logout();
      dispatch(removeToken());
      setIsLoading(true);
    } catch (error) {
      setError(true);
      throw toast.warning(error);
    } finally {
      setError(false);
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && !error && <Loader />}
      {error && <p>Something has gone wrong. Try reloading the page</p>}
      {!isLoading && !error && (
        <UserInfoContainer>
          <Greeting>
            Hello, <UserName>{userName !== null ? userName : "User"}</UserName>{" "}
            !
          </Greeting>
          <LogOutBtn type="button" onClick={handleLogOut}>
            Log out
          </LogOutBtn>
        </UserInfoContainer>
      )}
    </>
  );
};
