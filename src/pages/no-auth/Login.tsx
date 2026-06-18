import FormLogin from '../../components/Login/FormLogin'

const Login = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-1 bg-grey-200 items-center h-full p-2">
        <FormLogin />
      </div>
      <div className="flex-2 bg-green-600 h-full p-2">
        {/* Logo e Mensagem de boas vindas */}
      </div>
    </div>
  )
}

export default Login