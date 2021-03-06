import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import AllUser from "./Pages/Dashboard/AllUser";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import Payment from "./Pages/Dashboard/Payment";
import RemoveDoctorModal from "./Pages/Dashboard/RemoveDoctorModal";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Share/Footer/Footer";
import Header from "./Pages/Share/Header/Header";
import NotFound from "./Pages/Share/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/removeDoctorModal" element={<RemoveDoctorModal />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="allUser"
            element={
              <RequireAdmin>
                <AllUser />
              </RequireAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctor />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
