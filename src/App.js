import './App.css';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';
import TwoFactorAuth from './pages/TwoFactorAuth';
import ResetPassword from './pages/ResetPassword';
import ValidateOTP from './pages/ValidateOTP';
import PrivateRoute from './components/HOCs/PrivateRoute';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" exact element={<PrivateRoute />}>
          <Route path="/" exact element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/enable-2fa" element={<TwoFactorAuth />} />
        <Route path="/2fa" element={<ValidateOTP />} />
      </Routes>
    </div>
  );
}

export default App;
