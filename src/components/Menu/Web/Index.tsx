import { useAuth } from '../../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const HeaderMenu = () => {

    interface IUserData {
        name: string;
    }

    const user: IUserData = {
        name: localStorage.getItem('name') || 'Usuário',
    };

    const { logout } = useAuth();
    const  navigate  = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    return (
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <ul className="flex space-x-4 font-bold [&>li]:hover:text-amber-400">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dash</Link></li>
                    <li><Link to="/users">Usuários</Link></li>
                    <li><Link to="/templates">Templates</Link></li>
                    <li className="ml-auto text-amber-400">
                        <Link to="/profile">Bem vindo, {user.name}!</Link>
                    </li>
                    <li className="ml-1">
                        <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu