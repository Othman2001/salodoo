import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from "./Header";
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import '@testing-library/jest-dom'
import { Shipment, Status } from '../../types/shipment';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));



describe('<Header />', () => {
  let shipments: Shipment[] = [];
  let queryClinet;
  beforeAll(() => {
    queryClinet = new QueryClient();
    shipments = [{
      id: 1,
      attributes: {
        pickUpAddress: "",
        dropOffAddress: "",
        name: "name",
        shipper: { id: 1 },
        id: "2",
        status: Status.connectedToBiker
      }
    }]
  })

  it("should redner", async () => {
    const { baseElement } = render(
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <Header shipments={shipments} />
        </BrowserRouter>
      </QueryClientProvider>
    )
    expect(baseElement).toBeTruthy();
  })
  it("should your shipments button if there is shipments ", async () => {
    const queryClinet = new QueryClient();
    shipments = []
    render(
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <Header shipments={shipments} />
        </BrowserRouter>
      </QueryClientProvider>
    )
    expect(await screen.getByTestId('add-shipment', {
    })).toBeVisible()
  })
  it("should show your-shipments button if there is shipments ", async () => {
    shipments = [{
      id: 1,
      attributes: {
        pickUpAddress: "",
        dropOffAddress: "",
        name: "name",
        shipper: { id: 1 },
        id: "2",
        status: Status.connectedToBiker
      }
    }]
    render(
      <QueryClientProvider client={queryClinet}>
        <BrowserRouter>
          <Header shipments={shipments} />
        </BrowserRouter>
      </QueryClientProvider>
    )
    expect(await screen.getByTestId('shipments', {
    })).toBeVisible()
  })
})
