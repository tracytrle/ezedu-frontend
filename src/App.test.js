import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./components/ThemeProvider";

test("renders the App component", () => {
  const queryClient = new QueryClient();

  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Homepage />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );

  /*
  NOTE: must not use data-testid= "stack-component" because it is already existed
  */
  const stackElement = screen.getByTestId("home-component");
  expect(stackElement).toBeInTheDocument();
});
