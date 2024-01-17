import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute";
import About from "./components/About/About";
import Feature from "./components/Feature/Feature";
import Pricing from "./components/Pricing/Pricing";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" exact />
            <Route path="/about" exact element={<About />} />
            <Route path="/feature" exact element={<Feature />} />
            <Route path="/pricing" exact element={<Pricing />} />
          </Route>
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
