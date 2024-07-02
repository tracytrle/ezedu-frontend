import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import Homepage from "./pages/HomePage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import store from "./components/store";

import { Provider } from "react-redux";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Provider store={store}>
            <Homepage />
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
