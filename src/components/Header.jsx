import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#0d1b2a", // dark blue-grey
        color: "#ffffff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    };

    const logoStyle = {
        fontSize: "26px",
        textDecoration: "none",
        color: "#ffffff",
        fontWeight: "600",
        letterSpacing: "1px",
        transition: "color 0.3s",
    };

    const logoHoverStyle = {
        color: "#4ea8de", // royal blue hover
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "color 0.3s",
    };

    const cartHoverStyle = {
        color: "#a0c4ff", // light blue hover
    };

    const cartCountStyle = {
        backgroundColor: "#4ea8de", // royal blue
        color: "#ffffff",
        borderRadius: "12px",
        padding: "2px 8px",
        fontSize: "14px",
        fontWeight: "bold",
        minWidth: "24px",
        textAlign: "center"
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle} onMouseOver={e => e.currentTarget.style.color = logoHoverStyle.color} onMouseOut={e => e.currentTarget.style.color = logoStyle.color}>
                CityShopping
            </Link>
            <Link to="/cart" style={cartLinkStyle} onMouseOver={e => e.currentTarget.style.color = cartHoverStyle.color} onMouseOut={e => e.currentTarget.style.color = cartLinkStyle.color}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
