import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { MyThemeContext } from "../App";
import { CiDark, CiLight } from "react-icons/ci";

export default function Layout() {
  const { theme, setTheme } = useContext(MyThemeContext);
  return (
    <>
      <nav className={(theme === 'light' ? 'bg-gray-100 text-gray-800 ' : 'bg-gray-800 text-gray-100 ') + " p-4 flex justify-center gap-4"}>
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
          <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')} className="flex gap-2">
            <span>تغییر تم</span>
            {theme === 'light' ? <CiLight className="my-auto" size={25} /> : <CiDark className="my-auto" size={25} />}
          </button>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

