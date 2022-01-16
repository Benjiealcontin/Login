
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./auth/Login";
import Login from "./auth/Register";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <div className="App">
      <Navbar />
      </div>
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      />
        <Route
        path="/login"
        element={<Login />}
      />
        <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}
export default App;