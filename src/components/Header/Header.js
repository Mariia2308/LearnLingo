import icons from "../../sprite.svg";
import {
  NavContainer,
  LogoLink,
  LogoText,
  PagesList,
  ListItem,
  PagesLink,
} from "./Header.styled";
import { Container } from "../../CommonStyles.styled";
import { AuthBar } from "../Auth/AuthBar/AuthBar";
import { useEffect, useState } from "react";
import { UserInfo } from "../Auth/UserInfo/UserInfo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../src/components/firebase/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

export const Header = () => {
  const [user, setUser] = useState(null);
  const authUser = useSelector(selectUser);

  useEffect(() => {
    const subscriptionToggle = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => subscriptionToggle();
  }, []);

  return (
    <header>
      <Container>
        <NavContainer>
          <LogoLink to="/">
            <svg width="28px" height="28px">
              <use href={`${icons}#icon-logo`}></use>
            </svg>
            <LogoText>LearnLingo</LogoText>
          </LogoLink>
          <PagesList>
            <ListItem>
              <PagesLink to="/">Home</PagesLink>
            </ListItem>
            <ListItem>
              <PagesLink to="/teachers">Teachers</PagesLink>
            </ListItem>
            {user && authUser && (
              <ListItem className="underline">
                <PagesLink to="/favorites">Favorites</PagesLink>
              </ListItem>
            )}
          </PagesList>
          {user && authUser ? <UserInfo /> : <AuthBar />}
        </NavContainer>
      </Container>
    </header>
  );
};
