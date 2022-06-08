import { Container } from 'react-bootstrap'
import './assets/styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/home'
import DashboardAdmin from './pages/dashboard-admin/dashboard-admin'
import Login from './pages/login/login'
import Register from './pages/register/register'
import DetailProduct from './pages/detail-product/detail-product'
import ProtectedRoute from "./route/protectedRoute"

function App() {
  return (
    <div className="BG text-white">
      <Header></Header>
      <Container className="mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard-admin" element={<DashboardAdmin />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<Login />} />
        
      </Routes>
      </Container>
    </div>
  );
}

export default App;
