import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Userdashboard from "./Component/UserDashboard";
import Home from "./Component/Home";
import Adduser from "./Component/Adduser";
import Updateuser from "./Component/Updateuser";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Link to={"/"}>Home</Link>
          <Link to={"/user"}>User</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/user" element={<Userdashboard></Userdashboard>}></Route>
          <Route path="/user/add" element={<Adduser></Adduser>}></Route>
          <Route
            path="/user/edit/:code"
            element={<Updateuser></Updateuser>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
