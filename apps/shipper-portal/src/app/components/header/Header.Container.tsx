import { Spinner } from "@nextui-org/react";
import useGetShipments from "../../hooks/shipment/useGetShipments";
import { Shipment } from "../../types/shipment";
import HeaderComponent from "./Header";


export default function Header() {
  const { data, isLoading } = useGetShipments();
  return (
    isLoading ? (<Spinner />) : (<HeaderComponent shipments={data as Shipment[]} />)
  )
}
