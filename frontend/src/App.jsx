import "./App.css";
import { ProductPage } from "./components/ProductPage/product";
import { Routes, Route } from "react-router-dom";
import { Razor } from "./components/orderSummary/orderSummary";
import { PaymentSuccess } from "./components/orderSummary/PaymentSuccess";
import { HomePage } from "./components/main/homePage";

function App() {
  return (
    <div>
      {/* <ProductPage /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/hotel" element={<ProductPage />}></Route>
        <Route path="/payment" element={<Razor />}></Route>
        <Route path="/success" element={<PaymentSuccess />}></Route>
      </Routes>
    </div>
  );
}

export default App;
