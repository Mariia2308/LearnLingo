import Checkbox from "@mui/material/Checkbox";
import {
  HeartStroke,
  HeartFill,
  PushModal,
  PushContainer,
  PushText,
  CloseBtn,
} from "./HeartIcon.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavTeacher,
  removeFavTeacher,
} from "../../redux/teachers/favTeachersSlice";
import { selectFavTeachers, selectUser } from "../../redux/selectors";
import { useEffect, useState } from "react";
import icons from "../../sprite.svg";

export const HeartIcon = ({ teacher, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authUser = useSelector(selectUser);
  const [isHeartFavorite, setIsHeartFavorite] = useState(false);
  const dispatch = useDispatch();
  const favTeachers = useSelector(selectFavTeachers);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (favTeachers?.some((item) => item.id === id)) {
      setIsHeartFavorite(true);
    } else {
      setIsHeartFavorite(false);
    }
  }, [favTeachers, id]);

  const onHeartClick = () => {
    if (authUser) {
      setIsHeartFavorite(!isHeartFavorite);
      isHeartFavorite
        ? dispatch(removeFavTeacher(teacher))
        : dispatch(addFavTeacher(teacher));
    } else {
      openModal();
    }
  };

  return (
    <>
      <Checkbox
        icon={<HeartStroke />}
        checkedIcon={<HeartFill />}
        checked={isHeartFavorite}
        onChange={onHeartClick}
      />
      {isModalOpen && (
        <PushModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <PushContainer>
            <CloseBtn type="button" onClick={closeModal}>
              <svg width="32px" height="32px">
                <use href={`${icons}#icon-modal-cross`}></use>
              </svg>
            </CloseBtn>
            <img
              width="500px"
              height="250px"
              src="/LearnLingo/notification.jpg"
              alt="notification"
            />
            <PushText>Please, login to use this option</PushText>
          </PushContainer>
        </PushModal>
      )}
    </>
  );
};
