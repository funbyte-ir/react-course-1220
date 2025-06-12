import DigikalaCard from "./DigikalaCard";

export default function DigikalaList() {
    const mobilePhones = [
        {
            id: 1,
            name: 'گوشی سامسونگ گلکسی S23 اولترا',
            price: '۴۵,۹۹۹,۰۰۰ تومان',
            image: 'https://dkstatics-public.digikala.com/digikala-products/c23b49b0be1c4ae5b2a3d7a3281d2f1731065243_1726037574.jpg',
            count: 0,
        },
        {
            id: 2,
            name: 'گوشی آیفون 15 پرو مکس',
            price: '۶۷,۸۹۹,۰۰۰ تومان',
            image: 'https://dkstatics-public.digikala.com/digikala-products/6087dc7f8662ac9e9b175f512a27c9548686b3af_1736597894.jpg',
            count: 10,
        },
        {
            id: 3,
            name: 'گوشی شیائومی ردمی نوت 12',
            price: '۱۲,۳۹۹,۰۰۰ تومان',
            image: 'https://dkstatics-public.digikala.com/digikala-products/348e17f0fe855cb25127298fd5003460b3d29297_1690712123.jpg',
            count: 10,
        },
        {
            id: 4,
            name: 'گوشی پوکو X5 پرو',
            price: '۱۸,۷۹۹,۰۰۰ تومان',
            image: 'https://dkstatics-public.digikala.com/digikala-products/6144c3fdde10110e4312420db31e07f42e2cfc3a_1738146333.jpg',
            count: 10,
        },
        {
            id: 5,
            name: 'گوشی وان پلاس 11',
            price: '۳۴,۹۹۹,۰۰۰ تومان',
            image: 'https://dkstatics-public.digikala.com/digikala-products/6144c3fdde10110e4312420db31e07f42e2cfc3a_1738146333.jpg',
            count: 0,
        },
        {
            id: 6,
            name: 'گوشی هوآوی P60 پرو',
            // price: '۴۲,۵۰۰,۰۰۰ تومان',
            image: 'https://dkstatics-public.digikala.com/digikala-products/98088fde1336b39f8b2e985ac19e4230f104c8ef_1737477152.jpg',
            count: 10,
        },
    ];

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
                <DigikalaCard phone={phone}/>
            ))}
        </div>
    );
}