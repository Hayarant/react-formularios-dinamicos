import type { IUserList } from './types/type';
import { UserRoundPen, UserRoundX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface IUserListProps {
    data: IUserList[];
    loading?: boolean;
    error?: any;
}

interface IEditUser {
    userId: number;
}

const UserList = ({data, loading, error} : IUserListProps) => {
    const navigate = useNavigate();

    const handleEditUser = ({ userId }: IEditUser) => {
        navigate(`/users/edit/${userId}`);
    }

    const handleDeleteUser = ({ userId }: IEditUser) => {
        console.log(`Deletar usuário com ID: ${userId}`);
    }
    
    return (
        <div className="rounded-xl bg-white shadow-md">
            <table className="w-full">
                <thead className="border-b bg-slate-800 text-white">
                <tr>
                    <th className="px-6 py-4 text-left">Nome</th>
                    <th className="px-6 py-4 text-left">Email</th>
                    <th className="px-6 py-4 text-left">Perfil</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-center">Ações</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {loading && (
                        <tr><td colSpan={5} className="px-6 py-4 text-center">Carregando...</td></tr>
                    )}
                    {error && (
                        <tr><td colSpan={5} className="px-6 py-4 text-center">Erro ao carregar usuários.</td></tr>
                    )}
                    {data.map((user) => (
                        <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">{user.name}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">Administrador</td>
                            <td className="px-6 py-4 text-center">
                                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                                    Ativo
                                </span>
                            </td>
                            <td>
                                <div className="flex justify-center gap-2">
                                    <button 
                                        className="rounded bg-blue-500 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-600"
                                        onClick={() => handleEditUser({ userId: user.id })}
                                    >
                                        <UserRoundPen />
                                    </button>
                                    <button 
                                        className="rounded bg-red-500 px-3 py-1 text-sm font-semibold text-white hover:bg-red-600"
                                        onClick={() => handleDeleteUser({ userId: user.id })}
                                    >
                                        <UserRoundX />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList