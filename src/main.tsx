import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./component/context/Context.tsx";
import { UserProvider } from "./component/context/userContext.tsx";
import { ProductProvider } from "./component/context/productContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ProductProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ProductProvider>
    </ThemeProvider>
  </StrictMode>
);
