import { Link, useSearchParams } from "react-router-dom";
import MobilePhones from "../data/MobilePhones.json";

export default function ProductPage() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log(id);
    const mobilePhone = MobilePhones.mobilePhones.find((phone) => phone.id === parseInt(id));
    return <div className="grid grid-cols-2 h-screen w-screen mx-auto">
        <div className="flex justify-center items-center">
            <img className="w-[200px] h-[200px] object-cover" src={mobilePhone.image} alt={mobilePhone.name} />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4 bg-gray-100 rounded-lg">
            <h1>{mobilePhone.name}</h1>
            <p>{mobilePhone.price}</p>
            <p>{mobilePhone.count > 0 ? "موجود" : "ناموجود"}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">افزودن به سبد</button>
            <Link to="/products">بازگشت به صفحه اصلی</Link>
        </div>
    </div>;
}