import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';


export default function useLogout() {

    const navigate = useNavigate();
    const { logout } = useAuth();

    function handleLogout() {
        logout();
        navigate('/login' , { replace: true });
    }

    return handleLogout();
}