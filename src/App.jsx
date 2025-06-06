import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Form, Dashboard } from "./components";
import logo from './assets/logo.png'; // Caminho da logo

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="flex justify-center items-center h-screen bg-purple-900">
          <div className="text-center w-full max-w-md px-4"> {/* Ajustado para garantir que o conteúdo não sobreponha */}
            {/* Logo com margem ajustada */}
            <img src={logo} alt="Logo" className="mb-2 mx-auto" /> {/* Menos margem para logo */}
            {/* Formulário */}
            <Form />
          </div>
        </div>
      } />
      <Route path="/Dashboard" element={
        <div className="flex justify-center items-center h-screen bg-purple-900">
          <div className="text-center w-full max-w-md px-4"> {/* Ajustado para garantir que o conteúdo não sobreponha */}
            {/* Logo com margem ajustada para Dashboard */}
            <img src={logo} alt="Logo" className="mb-2 mx-auto" /> {/* Menos margem para logo */}
            <Dashboard />
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;
