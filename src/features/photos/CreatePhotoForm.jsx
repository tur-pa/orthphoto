import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";

function CreatePhotoForm({ onCloseModal }) {
  return (
    <Form>
      <FormRow label="Nazwa zdjęcia">
        <Input type="text" id="photoName"></Input>
      </FormRow>

      <FormRow label="Zdjęcie">
        <FileInput id="image" accept="image/*"></FileInput>
      </FormRow>

      <FormRow>
        <Button onClick={onCloseModal}>Zamknij</Button>
        <Button>Dodaj zdjęcie</Button>
      </FormRow>
    </Form>
  );
}

export default CreatePhotoForm;
