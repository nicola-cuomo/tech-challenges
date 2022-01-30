import { render, screen } from "@testing-library/react";
import { SurveyData } from "../../api/Survey";
import { AverageValue } from "../charts/AverageValue";
import { ChartNumeric } from "../charts/ChartNumeric";
import { ChartQCM } from "../charts/ChartQCM";

const mockData = {
  type: "QCM",
  title: "Most visited museum in Paris",
  data: [
    { name: "Louvre", value: 1980 },
    { name: "Orsay", value: 1200 },
    { name: "Art moderne", value: 350 },
    { name: "Pompidou", value: 1890 },
  ],
} as SurveyData;

const mockEmptyData = {
  type: "QCM",
  title: "Most visited museum in Paris",
  data: [],
} as SurveyData;

test("renders ChartQCM", () => {
  render(<ChartQCM data={mockData} />);
  expect(screen.getByText(/Most visited museum in Paris/i)).toBeInTheDocument();
  expect(screen.getByText(/Louvre/i)).toBeInTheDocument();
});

test("renders ChartQCM empty data", () => {
  render(<ChartQCM data={mockEmptyData} />);
  expect(screen.getByText(/Most visited museum in Paris/i)).toBeInTheDocument();
});

test("renders ChartNumeric", () => {
  render(<ChartNumeric data={mockData} />);
  expect(screen.getByText(/Most visited museum in Paris/i)).toBeInTheDocument();
  expect(screen.getByText(/Louvre/i)).toBeInTheDocument();
});

test("renders ChartNumeric empty data", () => {
  render(<ChartNumeric data={mockEmptyData} />);
  expect(screen.getByText(/Most visited museum in Paris/i)).toBeInTheDocument();
});

test("renders Average", () => {
  render(<AverageValue average="123.524534" />);
  expect(screen.getByText(/The average amount is/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/123.524534/i)).toBeInTheDocument();
});

test("renders Average 0", () => {
  render(<AverageValue average="0" />);
  expect(screen.getByText(/The average amount is/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/0/i)).toBeInTheDocument();
});
