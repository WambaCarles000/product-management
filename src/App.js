
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/productsList";
import ProductForm from "./components/productForm";
import ProductDetail from "./components/productDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/update-product/:id" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
