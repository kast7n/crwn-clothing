import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Navigation from "./routes/navigation/navigation.componenet.jsx";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component.jsx";
import CheckOut from "./routes/checkout/checkout.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="checkout" element={<CheckOut />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
