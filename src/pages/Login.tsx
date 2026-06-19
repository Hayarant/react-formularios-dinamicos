import Checkbox from '../components/Checkbox'
import Input from '../components/Input'
import Title from '../components/Title'
import Button from '../components/Button'
import Link from '../components/Link'

const Login = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-4 bg-linear-60 from-amber-500 to-amber-600'>
        <div className='min-h-50 w-100 p-4 border rounded flex flex-col items-center gap-4 bg-amber-500 border-white'>
            <Title title='Login' />
            <hr className='w-full border-t border-white' />
            <Input type='text' placeholder='Username' />
            <Input type='password' placeholder='Password' />
            <div className='w-full flex items-center justify-between'>
                <Checkbox text='Lembre-se de mim' size='medium'/>
                <Link text='Esqueci minha senha' onClick={() => {}} size='medium' />
            </div>
            <Button text='Login' onClick={() => {}} />
            <Link text='Não tenho uma conta' onClick={() => {}} />
        </div>
    </div>
  )
}

export default Login