import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastGreenNotify = (msg) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
