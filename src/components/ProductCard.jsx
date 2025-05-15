import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Styles
    const cardStyle = {
        width: "250px",
        backgroundColor: "#ffffff",
        color: "#1e1e2f",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        margin: "10px auto",
        fontFamily: "'Segoe UI', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "16px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: "1"
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
        transition: "transform 0.4s ease"
    };

    const titleStyle = {
        fontSize: "17px",
        fontWeight: "600",
        margin: "14px 0 6px",
        color: "#1e1e2f"
    };

    const priceStyle = {
        color: "#0077cc", // blue
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "6px",
    };

    const detailsText = {
        color: "#6b7280",
        fontSize: "14px",
        fontWeight: "normal",
        marginTop: "6px"
    };

    const buttonStyle = {
        backgroundColor: "#0077cc", // primary blue
        color: "#ffffff",
        border: "none",
        padding: "12px",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        transition: "background-color 0.3s ease",
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#4169e1" : "#0077cc"; // Royal Blue on hover
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        ...imageStyle,
                        ...(product.imageHover
                            ? { transform: "scale(1.05)" }
                            : {})
                    }}
                />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>

            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
