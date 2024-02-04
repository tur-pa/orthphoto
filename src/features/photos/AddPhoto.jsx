import { useState } from "react";
import Button from "../../ui/Button";
import { FaPlus } from "react-icons/fa6";
import Modal from "../../ui/Modal";
import CreatePhotoForm from "./CreatePhotoForm";

function AddPhoto() {
  return (
    <Modal>
      <Modal.Open opens="photo-form">
        <Button>
          <FaPlus /> &nbsp; Dodaj nowe zdjęcie
        </Button>
      </Modal.Open>
      <Modal.Window name="photo-form">
        <CreatePhotoForm></CreatePhotoForm>
      </Modal.Window>
    </Modal>
  );
}

export default AddPhoto;
