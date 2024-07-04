import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import Homepage from "./pages/HomePage";
import Landpage from "./pages/Landpage";
import Loginpage from "./pages/Loginpage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./components/store";

import { Provider } from "react-redux";

function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Landpage />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/homepage" element={<Homepage />}></Route>
            </Routes>
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
