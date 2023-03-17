import { Loading } from "@nextui-org/react"
import ShipmentTableComponent from "../../components/shipmentsTable/ShipmentsTable"
import useGetShipments from "../../hooks/shipment/useGetShipments"


export default function ShipmentTable() {
  const { data, isLoading } = useGetShipments();
  return (
    <div>
      {isLoading || !data ? (<Loading size="xl" />) : (<ShipmentTableComponent shipments={data} />)}
    </div>
  )
}
