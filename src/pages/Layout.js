import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="bg-gray-100 text-gray-800 p-4 flex justify-center gap-4">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className=" hover:text-gray-600">خانه</Link>
          </li>
          <li>
            <Link to="/films" className=" hover:text-gray-600">فیلم ها</Link>
          </li>
          <li>
            <Link to="/products" className=" hover:text-gray-600">محصولات</Link>
          </li>
          <li>
            <Link to="/game" className=" hover:text-gray-600">بازی</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

