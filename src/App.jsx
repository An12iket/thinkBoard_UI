import toast from "react-hot-toast";
import "./App.css";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NoteDetail from "./pages/NoteDetail";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes>
    </>
  );
}

export default App;