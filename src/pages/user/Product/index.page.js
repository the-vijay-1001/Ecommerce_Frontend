import { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import Product from "../../../components/Product/User";
import { UserProductService } from "../../../services/User/Product/index.services";

function UserProduct() {
  const [products, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await UserProductService.userProduct();
        setProduct(res.data.result);
      } catch (error) {
        window.alert("Error fetching data");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Product products={products} />
    </>
  );
}

export default UserProduct;
