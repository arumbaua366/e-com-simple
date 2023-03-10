import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import Store from "./pages/Store";
import CartProvider from "./CartContext";

// localhost: 3001 -> Home
// localhoust:3001/success -> Success
// localhoust:3001/cancel -> Cancel

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;

// cartprovider is wrapped around all other components so each component has access to context and provider
