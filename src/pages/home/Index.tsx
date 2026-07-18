import HeaderMenu from '../../components/Menu/Web/Index'

const HomePage = () => {
  return (
    <div className="flex flex-col gap-2 w-screen h-screen">
      <HeaderMenu />

      <div className="flex flex-col gap-2 items-center justify-center w-screen h-screen bg-gray-100">
        <div className="">
          <h3 className="text-lg font-bold w-full">Home Page!</h3>
        </div>
      </div>
    </div>
  )
}

export default HomePage