import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
