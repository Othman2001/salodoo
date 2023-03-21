import { useQuery } from '@tanstack/react-query';
import client from '../../helpers/client';
import { Shipment } from '../types/shipment';

export const useGetShipmentsQuery = (id: number | null) => {
  const fetchShipments = async (id: number): Promise<Shipment[]> => {
    const res = await client.get(`/api/shipments?filters[id][$eq]=${id}`);
    return res.data.data;
  };
  const getShipmentsQuery = useQuery({
    queryKey: ['fetch-shipments', id],
    queryFn: () => fetchShipments(id as number),
    enabled: !!id,
  });
  return {
    ...getShipmentsQuery,
  };
};
