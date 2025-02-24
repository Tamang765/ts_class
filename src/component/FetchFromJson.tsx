import { useContext, useEffect, useState } from "react";
import { productContext } from "./context/productContext";

type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const FetchFromJson = () => {
  const [data, setData] = useState<postType[]>([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(products);
  return (
    <div className="border-2 border-green-600">
      {data.map((item) => (
        <div>---{item?.title}</div>
      ))}
    </div>
  );
};

export default FetchFromJson;
