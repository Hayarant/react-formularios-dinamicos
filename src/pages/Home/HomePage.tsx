import HeaderMenu from "../../components/Menu/Web/Index";

const HomePage = () => {
  return (
    <main className="w-screen h-screen">
      <div className="flex flex-col gap-2 w-screen h-screen">
        <HeaderMenu />
        <div className="flex flex-col gap-2 items-center justify-center w-screen h-screen bg-gray-100">
          <div className="">
            <h3 className="text-lg font-bold w-full">Home Page!</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
