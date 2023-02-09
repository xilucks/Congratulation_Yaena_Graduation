import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <main className="grid-rows-header-footer relative m-auto grid min-h-screen w-screen max-w-md overflow-x-hidden text-black">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
