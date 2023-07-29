import "./App.css";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import ResetPassword from "./pages/ResetPassword";
import ValidateOTP from "./pages/ValidateOTP";
import PrivateRoute from "./components/HOCs/PrivateRoute";
import Settings from "./pages/Settings";
import PersonalInfo from "./pages/PersonalInfo";
import ProfileForm from "./pages/ProfileForm";
import Inventory from "./pages/Inventory";
import ProductInfo from "./pages/ProductInfo";
import InventoryReport from "./pages/InventoryReport";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" exact element={<PrivateRoute />}>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/Settings" exact element={<Settings />} />
          <Route
            path="/Personal-information"
            exact
            element={<PersonalInfo />}
          />
          <Route path="/Inventory" exact element={<Inventory />} />
          <Route path="/Profile-form" exact element={<ProfileForm />} />
          <Route path="/Product-info" exact element={<ProductInfo />} />
          <Route path="/Report" exact element={<InventoryReport />} />
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
