import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "linear-gradient(to right, #E6E6FA, #D8BFD8)", // lavender to thistle
            fontFamily: "'Poppins', sans-serif",
            padding: "20px"
        },
        card: {
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            maxWidth: "500px",
            width: "100%"
        },
        title: {
            fontSize: "2.5rem",
            color: "#8A2BE2", // violet
            marginBottom: "20px"
        },
        message: {
            fontSize: "1.2rem",
            color: "#555",
            marginBottom: "30px"
        },
        button: {
            padding: "12px 30px",
            fontSize: "1rem",
            backgroundColor: "#8A2BE2",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "background 0.3s ease, transform 0.2s ease",
        },
        buttonHover: {
            backgroundColor: "#7a1fcf",
            transform: "scale(1.05)"
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
                <p style={styles.message}>Thank you for shopping with us.</p>
                <a
                    href="/"
                    style={styles.button}
                    onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                >
                    Go to Home
                </a>
            </div>
        </div>
    );
}
