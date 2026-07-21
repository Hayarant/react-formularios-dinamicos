import { useEffect, useState } from "react";
import Input from "@/components/Input";
import InputSpan from "@/components/InputSpan";
import { Button, ButtonConfirm } from "@/components/Button";
import Modal from "@/components/Modal/Web/Modal";
import type { UserProp } from "./types/type";
import { useUpdateUser } from "@/hooks/auth/users/users";
import { AltTitle, ModalTitle } from "@/components/Title";

interface EditUserFormProps {
  data: UserProp;
}

const EditForm = ({ data }: EditUserFormProps) => {
  const { mutate, isPending } = useUpdateUser();
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [open, setOpen] = useState(false);
  const [confirmEdit, setConfirm] = useState(false);

  function handleConfirmModal() {
    setConfirm(true);
    setOpen(false);
  }

  function handleEditUser() {
    mutate(
      {
        id: data.id,
        email: email,
        name: name,
      },
      {
        onSuccess(data) {
          setName(data.name);
          setEmail(data.email);
        },
      },
    );
  }

  useEffect(() => {
    handleEditUser();
  }, [confirmEdit]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex space-x-2">
          <div className="w-full">
            <InputSpan text="Nome: " />
            <Input
              placeholder="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-full">
            <InputSpan text="Email: " />
            <Input
              placeholder="Nome"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            text={isPending ? "Atualizando..." : "Atualizar"}
            key={data.id}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="flex flex-col items-center">
            <ModalTitle text="Confirma a edição do usuário?" />
            <AltTitle text="Este processo pode ser revertido" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex gap-1 justify-end">
            <ButtonConfirm text="Confirmar" onClick={handleConfirmModal} />
            <Button text="Cancelar" onClick={handleConfirmModal} />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditForm;
