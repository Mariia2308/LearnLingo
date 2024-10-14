import { useSelector } from "react-redux";
import { selectFavTeachers } from "../redux/selectors";
import { Card } from "../../src/components/Teachers/Card/Card";
import { Container, TextFav } from "../CommonStyles.styled";
import { NavLink } from "react-router-dom";
import { ScrollUpButton } from "../components/ScrollUpButton/ScrllUpButton";
import { useState } from "react";

const Favorites = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favTeachers = useSelector(selectFavTeachers);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
  };

  return (
    <section style={{ background: "#f8f8f8" }}>
      <Container>
        {!isModalOpen && <ScrollUpButton />}
        {favTeachers.length === 0 ? (
          <TextFav>
            Your favorites list is empty! Start adding favorites&nbsp;
            <NavLink style={{ textDecoration: "underline" }} to="/teachers">
              now
            </NavLink>
          </TextFav>
        ) : (
          <ul>
            {favTeachers?.map((teacher) => (
              <li key={teacher.id}>
                <Card
                  teacher={teacher}
                  openModal={openModal}
                  closeModal={closeModal}
                  isModalOpen={isModalOpen}
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default Favorites;
