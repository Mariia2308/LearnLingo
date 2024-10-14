import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toaster = () => {
  return (
    <ToastContainer
      position={"top-right"}
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      progress={undefined}
      theme={"colored"}
      transition={Flip}
    />
  );
};
