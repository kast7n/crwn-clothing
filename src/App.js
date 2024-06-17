import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Navigation from "./routes/navigation/navigation.componenet.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
