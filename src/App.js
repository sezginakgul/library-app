import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter className="App">
      <AppRouter />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
