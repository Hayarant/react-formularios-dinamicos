import { useParams } from "react-router-dom";
import HeaderMenu from "@/components/Menu/Web/Index";
import EditForm from "./components/EditForm/EditForm";
import { useGetUserById } from "@/hooks/auth/users/users";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isPending, isSuccess, error } = useGetUserById({
    id: Number(id),
  });

  if (isPending) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro {error.message}</p>;
  }

  return (
    <div className="flex flex-col gap-2 w-screen h-screen">
      <HeaderMenu />

      <div className="w-screen h-screen bg-gray-100">
        <div className="flex flex-col m-1">
          <div className="flex flex-col p-2 border rounded-lg border-gray-400 bg-gray-100 w-full h-full">
            <h3 className="text-lg font-bold w-full mb-2">Editar Usuário</h3>

            <hr className="w-full mb-2 border-t border-gray-400" />

            {isSuccess && <EditForm data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
