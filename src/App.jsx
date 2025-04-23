import Layout from "./components/layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route path="/" element={<Layout />}
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App
