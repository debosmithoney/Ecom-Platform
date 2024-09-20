import express from "express";
import productRoutes from "./routes/productRoutes";

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests (if needed for more complex payloads in the future)
app.use(express.json());

// Use the product routes
app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
