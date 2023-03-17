import { useQuery } from "@tanstack/react-query";
import client from "../../helpers/client";
import { Shipment } from "../../types/shipment";

const useGetShipments = () => {
  const fetchShipments = async (): Promise<Shipment[]> => {
    const res = client.get("/api/shipments")
    return (await res).data.data
  }
  const shipmentsQuery = useQuery({
    queryKey: ['get-shipments'],
    queryFn: fetchShipments
  })
  return {
    ...shipmentsQuery
  }
}

export default useGetShipments;
