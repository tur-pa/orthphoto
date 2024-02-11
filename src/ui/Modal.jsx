import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa6";
import { useOutsideClick } from "../hooks/useOutsideClick";

const styledModal = `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg py-12 px-14 transition-all`;
const overlay = `fixed top-0 left-0 w-full h-screen bg-gray-200/[0.5] backdrop-blur-sm z-[1000] transition-all`;
const closeButton = `apperance-none p-2 rounded-sm translate-x-3 rotate-45 transition-all absolute top-5 right-7 text-gray-600 hover:text-gray-800`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  // Clone button from AddPhoto.jsx and add new props like below.
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className={overlay}>
      <div className={styledModal} ref={ref}>
        <button onClick={close} className={closeButton}>
          <FaPlus />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
