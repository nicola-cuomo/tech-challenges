import {
  createEvent,
  findByText,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard";

function renderDashboard() {
  const queryClient = new QueryClient();

  return render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

describe("Test main Dashboard", () => {
  test("renders left drawer", () => {
    renderDashboard();
    expect(screen.getByText(/IWD Surveys/i)).toBeInTheDocument();
    expect(screen.getByText(/All Surveys/i)).toBeInTheDocument();
  });

  test("select QCM", async () => {
    renderDashboard();
    fireEvent["click"](screen.getByText(/QCM/i));
    expect(await screen.findByText(/Multiple choice question/i)).toBeVisible();
  });

  test("select Numeric", async () => {
    renderDashboard();
    fireEvent["click"](screen.getByText(/Numeric/i));
    expect(await screen.findByText(/Numeric choice question/i)).toBeVisible();
  });

  test("select Date", async () => {
    renderDashboard();
    fireEvent["click"](screen.getByText(/Date/i));
    expect(await screen.findByText(/Date choice question/i)).toBeVisible();
  });
});
