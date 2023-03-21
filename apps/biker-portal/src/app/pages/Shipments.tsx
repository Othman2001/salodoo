import { ShipmentTable } from "@sharedUi"
import { useGetShipmentsQuery } from "../hooks/useGetShipmentsQuery"

export default function Shipments() {
  const { data } = useGetShipmentsQuery(1)


  return (
    <>
      {data && (<ShipmentTable shipments={data} />)}
    </>


  )
}


