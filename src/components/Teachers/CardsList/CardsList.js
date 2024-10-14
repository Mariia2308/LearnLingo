import { Loader } from "../../Loader/Loader";
import { Card } from "../Card/Card";
import { TeachersItem } from "./CardsList.styled";

export const CardsList = ({
  allTeachers,
  openModal,
  closeModal,
  isModalOpen,
}) => {
  if (!allTeachers) {
    <>
      <Loader />
    </>;
  }

  return (
    <ul style={{ maxWidth: "1440px" }}>
      {allTeachers?.map((teacher) => (
        <TeachersItem key={teacher.id}>
          <Card
            teacher={teacher}
            openModal={openModal}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
          />
        </TeachersItem>
      ))}
    </ul>
  );
};
