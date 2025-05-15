import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa";

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [hovered, setHovered] = useState(false);

    const filtered = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "40px 30px",
            fontFamily: "'Segoe UI', sans-serif",
            backgroundColor: "#f4f7fa", // soft light background
            minHeight: "100vh",
            color: "#1f2937"
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.4rem",
            fontWeight: "700",
            color: hovered ? "#4ea8de" : "#3d348b", // royal on hover
            gap: "14px",
            marginBottom: "30px",
            transition: "all 0.3s ease",
            cursor: "pointer",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            textShadow: hovered ? "0 3px 8px rgba(78, 168, 222, 0.4)" : "none"
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
            flexWrap: "wrap"
        },
        input: {
            padding: "12px 16px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            minWidth: "240px"
        },
        select: {
            padding: "12px 16px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            minWidth: "200px"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
            paddingTop: "10px"
        }
    };

    return (
        <div style={styles.container}>
            <h1
                style={styles.heading}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <FaStoreAlt size={32} color={hovered ? "#4ea8de" : "#7b2cbf"} />
                Explore Our Products
            </h1>

            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="🔍 Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.select}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div style={styles.grid}>
                {filtered.map((product) => (
                    <ProductCard key={product.id + product.name} product={product} />
                ))}
            </div>
        </div>
    );
}
