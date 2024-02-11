import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useAddPhoto } from "./useAddPhoto";
import { useForm } from "react-hook-form";

function CreatePhotoForm({ onCloseModal }) {
  const { isAdding, addPhoto } = useAddPhoto();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const image = data.image[0];
    addPhoto(
      { ...data, image: image },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      },
    );
    console.log({ ...data, image: image });
  }

  function onError(error) {
    console.log("Coś poszło nie tak.");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Nazwa zdjęcia">
        <Input
          type="text"
          id="name"
          formFn={register("name", { required: "To pole jest wymagane." })}
        ></Input>
      </FormRow>

      <FormRow label="Zdjęcie">
        <FileInput
          id="image"
          accept="image/*"
          formFn={register("image", { required: "To pole jest wymagane." })}
        ></FileInput>
      </FormRow>

      <FormRow>
        <Button onClick={onCloseModal}>Zamknij</Button>
        <Button type="submit">Dodaj zdjęcie</Button>
      </FormRow>
    </Form>
  );
}

export default CreatePhotoForm;
