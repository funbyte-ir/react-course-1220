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
            price: '۴۲,۵۰۰,۰۰۰ تومان',
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

    const cardStyle = {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        backgroundColor: '#fff',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }
    };

    const imageContainerStyle = {
        width: '100%',
        height: '200px',
        marginBottom: '15px',
        overflow: 'hidden',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center'
    };

    const nameStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
        height: '48px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
    };

    const priceStyle = {
        fontSize: '18px',
        color: '#d32f2f',
        fontWeight: 'bold',
        marginTop: '10px'
    };

    const buttonStyle = {
        backgroundColor: '#2196f3',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '8px 16px',
        cursor: 'pointer',
        marginTop: '10px'
    };

    const outOfStockStyle = {
        color: '#d32f2f',
        fontWeight: 'bold',
        marginTop: '10px'
    };

    return (
        <div style={containerStyle}>
            {mobilePhones.map((phone) => (
                <div key={phone.id} style={cardStyle}>
                    <div style={imageContainerStyle}>
                        <img
                            src={phone.image}
                            alt={phone.name}
                            style={imageStyle}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/300x300?text=تصویر+موجود+نیست';
                            }}
                        />
                    </div>
                    <div style={nameStyle}>{phone.name}</div>
                    {phone.price && <div style={priceStyle}>{phone.price}</div>}
                    {phone.count > 0 ? (
                        <button style={buttonStyle}>افزودن به سبد</button>
                    ) : (
                        <span style={outOfStockStyle}>ناموجود</span>
                    )}
                </div>
            ))}
        </div>
    );
}