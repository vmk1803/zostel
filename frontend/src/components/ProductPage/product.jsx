import { FrontDisplay } from "./frontDisplay";
import { Rooms } from "./rooms";
import { ProductPolicy } from "./product/productPolicy";
import { Navbar } from "../main/Home/Navbar/Navbar";

export const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <FrontDisplay />
      <Rooms />
      <ProductPolicy />
    </div>
  );
};
