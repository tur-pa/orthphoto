import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Form from "../ui/Form";
import Input from "../ui/Input";
import FileInput from "../ui/FileInput";
import { useState } from "react";
import Header from "../ui/Header";

function Userpage() {
  const [isOpen, setIsOpen] = useState(false);

  const avatarClass = `w-[130px] h-[130px] rounded-full object-cover`;
  const usernameClass = `text-2xl font-medium mt-7`;

  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <img
          className={avatarClass}
          src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-verde-atras-do-verde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        ></img>

        <h1 className={usernameClass}>Nazwa użytkownika</h1>
        <div className="">
          <Button type="bgButton">Edytuj profil</Button>
          <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            Dodaj nowe zdjęcie
          </Button>
        </div>
      </div>
      <div>
        {isOpen && (
          <Form>
            <FormRow label="Nazwa zdjęcia">
              <Input type="text" id="photoName"></Input>
            </FormRow>

            <FormRow label="Zdjęcie">
              <FileInput id="image" accept="image/*"></FileInput>
            </FormRow>

            <FormRow>
              <Button>Zamknij</Button>
              <Button>Dodaj zdjęcie</Button>
            </FormRow>
          </Form>
        )}
      </div>
    </>
  );
}

export default Userpage;
