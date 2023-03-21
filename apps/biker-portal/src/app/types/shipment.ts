export enum Status {
  published = 'published',
  connectedToBiker = 'ConnectedToBiker',
  delivered = 'delivered',
}

export type Shipment = {
  attributes: {
    pickUpAddress: string;
    dropOffAddress: string;
    name: string;
    id: string;
    shipper: { id: number };
    status: Status;
  };
  id: number;
};
