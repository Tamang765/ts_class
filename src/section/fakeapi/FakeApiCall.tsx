import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../../component/Card";
import { productContext } from "../../component/context/productContext";

type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const FakeApiCall = ({ name }: { name: string }) => {
  // const [data, setData] = useState<productType[]>([]);
  const products = useContext(productContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => products.setProductData(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  return (
    <div className="grid grid-cols-3">
      who is logged in? {name}
      {products.productData.map((item) => (
        <ProductCard
          category={item.category}
          name={item.title}
          imageSrc={item.image}
          price={item.price}
          rating={item.rating.rate}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default FakeApiCall;
