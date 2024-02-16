import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useAddPhoto } from "./useAddPhoto";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import Tags from "../../ui/Tags";

function CreatePhotoForm({ onCloseModal }) {
  const { isAdding, addPhoto } = useAddPhoto();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const methods = useForm();

  function onSubmit(data) {
    console.log(data);
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
  }

  function onError(error) {
    console.log("Coś poszło nie tak.");
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <FormRow label="Nazwa zdjęcia">
          <Input type="text" id="name"></Input>
        </FormRow>

        <FormRow label="Tagi">
          <Tags type="text" id="tags"></Tags>
        </FormRow>

        <FormRow label="Zdjęcie">
          <FileInput id="image" accept="image/*"></FileInput>
        </FormRow>

        <FormRow>
          <Button onClick={onCloseModal}>Zamknij</Button>
          <Button type="submit">Dodaj zdjęcie</Button>
        </FormRow>
      </Form>
    </FormProvider>
  );
}

export default CreatePhotoForm;
