import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component.jsx";
import Navigation from "./routes/navigation/navigation.componenet.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
