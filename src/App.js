import "./App.css";
import ThemeProvider from "./context/theme/ThemeProvider";
import Homepage from "./pages/Home/HomePage";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/Loginpage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./context/messages/store";

import { Provider } from "react-redux";
import NotFoundPage from "./pages/Register/NotFoundPage";
import RegisterPage from "./pages/Register/RegisterPage";
import { AuthProvider } from "./context/authContext/AuthContext";
import InfoForm from "./pages/Register/InfoForm";
import Registration from "./pages/Register/Registration";
// import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <Provider store={store}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/notfound" element={<NotFoundPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* <Route path="/register" element={<RegisterPage />}></Route> */}
                <Route path="/homepage" element={<Homepage />}></Route>
                <Route path="/information" element={<InfoForm />} />
                <Route path="/register" element={<Registration />} />

                {/* <ProtectedRoute
                  path="/protected"
                  component={() => <h1>Protected Route</h1>}
                /> */}
              </Routes>
            </Provider>
          </ThemeProvider>
        </QueryClientProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
