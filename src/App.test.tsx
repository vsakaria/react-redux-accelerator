import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

it("renders welcome message", () => {
  const { getByText } = render(<App />);
  expect(getByText('React Accelerator')).toBeInTheDocument();
});
