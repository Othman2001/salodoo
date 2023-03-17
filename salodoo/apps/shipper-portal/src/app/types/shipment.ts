export type Shipper = { 
    name:string;
    email:string;
}
enum Status {
    Pending,
    ConnectedToBiker,
    Delivered,
  }
export type Shipment = {
    pickUpAddress:string;
    dropOffAddress:string;
    name:string;
    id:string;
    shipper:Shipper
    status: Status
}