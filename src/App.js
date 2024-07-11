import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import Homepage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./components/store";

import { Provider } from "react-redux";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./AuthComponents/AuthContext";
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
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/homepage" element={<Homepage />}></Route>
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
