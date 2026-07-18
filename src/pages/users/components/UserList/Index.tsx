import type { IUserList } from './types/type';

interface IUserListProps {
    data: IUserList[];
}

const UserList = ({data} : IUserListProps) => {
  return (
    <div className="rounded-xl bg-white shadow-md">
        <table className="w-full">
            <thead className="border-b bg-slate-800 text-white">
            <tr>
                <th className="px-6 py-4 text-left">Nome</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Perfil</th>
                <th className="px-6 py-4 text-center">Status</th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
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
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList