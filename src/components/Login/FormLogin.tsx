import Input from "../Form/Input"

const FormLogin = () => {
  return (
    <div className="flex flex-1 flex-col min-h-75 rounded-sm items-center bg-green-600 gap-4">

      <Input name="username" type="email" placeholder="Digite seu email"/>
      <Input name="password" type="password" placeholder="Digite sua senha"/>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Entrar</button>
    </div>
  )
}

export default FormLogin