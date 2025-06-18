import { Link } from "react-router-dom";
import DigikalaCard from "./DigikalaCard";
import MobilePhones from "../data/MobilePhones.json";

export default function DigikalaList() {
    const mobilePhones = MobilePhones.mobilePhones;

    // Styles
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        direction: 'rtl',
        backgroundColor: '#f5f5f5'
    };

    

    return (
        <div style={containerStyle}>
            {mobilePhones.map((phone) => (
                <Link to={`/product?id=${phone.id}`}>
                    <DigikalaCard phone={phone}/>
                </Link>
            ))}
        </div>
    );
}