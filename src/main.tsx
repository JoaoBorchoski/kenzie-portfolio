import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

//um comentario aqui hein

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyle>
            <NavBar />
            <Home />
            <Footer />
        </GlobalStyle>
    </React.StrictMode>
);
