import Checkbox from '../components/Checkbox'
import Input from '../components/Input'
import Title from '../components/Title'
import Button from '../components/Button'
import Link from '../components/Link'
import { useLogin } from '../hooks/useLogin'
import { useState } from 'react'

const Login = () => {

  const { mutate , isPending } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    mutate(
      {
        email: email,
        password: password,
      },
      {
        onSuccess(data) {
          localStorage.setItem("token", data.auth);
        },
      }
    );
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-4 bg-linear-60 from-amber-500 to-amber-600'>
        <div className='min-h-50 w-100 p-4 border rounded flex flex-col items-center gap-4 bg-amber-500 border-white'>
            <Title title='Login' />
            <hr className='w-full border-t border-white' />
            <Input type='text' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className='w-full flex items-center justify-between'>
                <Checkbox text='Lembre-se de mim' size='medium'/>
                <Link text='Esqueci minha senha' onClick={() => {}} size='medium' />
            </div>
            <Button text={isPending ? 'Entrando...' : 'Login'} onClick={handleLogin} />
            <Link text='Não tenho uma conta' onClick={() => {}} />
        </div>
    </div>
  )
}

export default Login