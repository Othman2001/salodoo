import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import AddShipmentForm from "./AddShipmentForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom'


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe('<AddShipmentForm />', () => {
  let queryClinet = new QueryClient();
  beforeAll(() => {
    queryClinet = new QueryClient();
  })
  it("should render suceessfully", () => {
    const { baseElement } = render(
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <AddShipmentForm />
        </BrowserRouter>
      </QueryClientProvider>
    )
    expect(baseElement).toBeTruthy()
  })
  it("should add button be disabled if the user didn't enter values", async () => {

    render(
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <AddShipmentForm />
        </BrowserRouter>
      </QueryClientProvider>
    )
    expect(await screen.findByTestId("add-button")).toHaveAttribute('disabled')
  })
})
