import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import MainLayout from "./components/MainLayout";
import Books from "./pages/Books";
import Users from "./pages/Users";
import Transactions from "./pages/Transactions";
import theme from "./theme";
import Login from "./pages/LoginSignup/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/LoginSignup/Signup";
import Forgot from "./pages/LoginSignup/Forgot";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login/forgot" element={<Forgot />} />
          <Route
            path="/dashboard"
            element={
              <MainLayout
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              >
                <Dashboard />
              </MainLayout>
            }
          />
          <Route
            path="/books"
            element={
              <MainLayout
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              >
                <Books />
              </MainLayout>
            }
          />
          <Route
            path="/users"
            element={
              <MainLayout
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              >
                <Users />
              </MainLayout>
            }
          />
          <Route
            path="/transactions"
            element={
              <MainLayout
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              >
                <Transactions />
              </MainLayout>
            }
          />

          <Route
            path="/"
            element={
              <MainLayout
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              >
                <Dashboard />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
