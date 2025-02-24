import React from "react";

const productContext = React.createContext("");

type Children = {
  children?: React.ReactNode;
};

const ProductProvider: React.FC<Children> = ({ children }) => {
  const [productData, setProductData] = React.useState([]);

  const product = {
    productData,
    setProductData,
  };

  return (
    <productContext.Provider value={product}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, productContext };
