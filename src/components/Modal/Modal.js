import Modal from "react-modal";

Modal.setAppElement("#root");

export const BasicModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Basic modal"
    >
      {children}
    </Modal>
  );
};
