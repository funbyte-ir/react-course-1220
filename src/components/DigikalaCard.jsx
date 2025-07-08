
export default function DigikalaCard({phone}){
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
    );
}