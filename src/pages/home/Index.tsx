import  useLogout  from '../../hooks/useLogout'
import Button from '../../components/Button'

const HomePage = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-2 border rounded-md w-[400px] h-[400px] items-center bg-amber-500 border-amber-600">
        <h3 className="text-lg font-bold w-full">Home Page!</h3>
        <Button text="Logout" onClick={useLogout} />
      </div>
    </div>
  )
}

export default HomePage