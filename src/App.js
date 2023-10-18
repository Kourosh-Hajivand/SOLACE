import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Page/Main";
import NotFound from "./Page/404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
