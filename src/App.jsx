import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import './App.css';
import ListFoodDonations from "./components/ListFoodDonations";
import PostDonation from "./components/PostDonation";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import SignupPage from "./components/SignUp";
import About from "./components/About";
import AwarenessSection from "./components/AwarenessSection";
import Home from "./Home";
import Logout from "./components/Logout";
import MyDonations from "./components/MyDonation";
import EditDonation from "./components/EditDonation";
import AdminLoginPage from "./components/AdminLogin";
import AdminSignupPage from "./components/AdminSignup";
import AdminDashboard from "./components/AdminDashboard";
import AdminHeader from "./components/AdminHeader";
import AdminProfile from "./components/AdminProfile";
import AdminDonationList from "./components/AdminDonationList";
import AdminUserManagement from "./components/AdminUserManagement";
import AdminUserEdit from "./components/AdminUserEdit";
import AdminDonationManagement from "./components/AdminDonationManagement";



const App = () => {

  // const location = useLocation();

  // // Dynamic Header Selection Based on Route
  // const renderHeader = () => {
  //   if (location.pathname === "/profile" || location.pathname === "/about") {
  //     return <UserHeaderHeader />; // General Header for public pages
  //   }
  //   return < Header />; // Specific header for login/signup
  // };



  return (
    <>
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin-signup" element={<AdminSignupPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-header" element={<AdminHeader />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/admin-donations" element={<AdminDonationList />} />
        <Route path="/user-management" element={<AdminUserManagement />} />
        <Route path="/admin-donations/edit/:id" element={<AdminDonationManagement />} />
        <Route path="/admin-users/edit/:id" element={<AdminUserEdit />} />

          <Route path="/editDonation/:id" element={<EditDonation />} />
          <Route path="/donations" element={<ListFoodDonations />} />
          <Route path="/mydonations" element={<MyDonations />} />
          <Route path="/addDonations" element={<PostDonation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<AwarenessSection />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
