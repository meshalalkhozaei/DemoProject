import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// استيراد Application Insights
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin, appInsights } from "./config/appInsights";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // تسجيل عرض الصفحة عند تغيير المسار
    appInsights.trackPageView({ name: location.pathname });
    console.log("Page view tracked:", location.pathname);
  }, [location]);

  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer />
      </div>
    </AppInsightsContext.Provider>
  );
};

export default App;
