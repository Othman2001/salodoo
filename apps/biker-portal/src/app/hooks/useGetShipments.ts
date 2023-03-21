import { useQuery } from '@tanstack/react-query';
import client from '../../helpers/client';
import { Shipment } from '../types/shipment';

export const useGetShipments = () => {
  const fetchShipments = async (): Promise<Shipment[]> => {
    const res = client.get(`/api/shipments?filters[status][$ne]=`);
    return (await res).data.data;
  };
  const shipmentsQuery = useQuery({
    queryKey: ['get-shipments', 1],
    queryFn: fetchShipments,
  });
  return {
    ...shipmentsQuery,
  };
};

export default useGetShipments;
