import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/home'
import DashboardAdmin from './pages/dashboard-admin/dashboard-admin'
import Login from './pages/login/login'
import Register from './pages/register/register'
import DetailProduct from './pages/detail-product/detail-product'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-product" element={<DetailProduct />} />
      </Routes>
    </div>
  );
}

export default App;
