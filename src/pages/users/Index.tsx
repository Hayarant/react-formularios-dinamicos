import Button from '../../components/Button'
import HeaderMenu from '../../components/Menu/Web/Index'
import UserList from './components/UserList/Index'

import { Users } from '../../hooks/auth/users/users'

const UsersPage = () => {
  const { data: list , isPending, error } = Users();

  if (isPending) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar usuários.</p>;
  }

  return (
    <div className="flex flex-col gap-2 w-screen h-screen">
      <HeaderMenu />

      <div className="w-screen h-screen bg-gray-100">
        <div className="flex flex-col m-1">
            <div className="flex flex-col p-2 border rounded-lg border-gray-400 bg-gray-100 w-full h-full">
                <h3 className="text-lg font-bold w-full mb-2">Controle de Usuários</h3>

                <div className="flex flex-col gap-2 mb-2 w-50">
                    <Button text="Cadastrar" onClick={() => {}} />
                </div>

                <hr className="w-full mb-2 border-t border-gray-400" />
                <UserList data={list} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default UsersPage