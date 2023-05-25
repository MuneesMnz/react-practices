import React, { useState } from "react";
import Modal from "react-modal";

// for cosole error
Modal.setAppElement("#root");

const Model = () => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isopen)}>Click</button>
      <Modal
        isOpen={isopen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsOpen(false)}
        // closeTimeoutMS={1000}  ------time delay for closeing
        style={
            {
                overlay:{
                    background:"gray"
                },
                content:{
                    color:"red"
                }
            }
        }
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={() => setIsOpen(false)}>close</button>
      </Modal>
    </div>
  );
};

export default Model;
