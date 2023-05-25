import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  <div>
    <div style={{ color: "black" }}>something went Wrong</div>
    <button onClick={closeToast}>Close</button>
  </div>;
};

const Toastfy = () => {
  const notify = () => {
    toast("basic Notification", {
      position: "top-center",
      type: "success",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log("aa");

    toast.warn(<CustomToast />, { position: "bottom-center", theme: "drak" });
  };
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default Toastfy;

// position = top - left,top - right,top - center,bottom - left,bottom - right,bottom - center,

// type= info,success,warning,error,default

// auto close=false or time (5000)

// theme = colored, dark ,light
