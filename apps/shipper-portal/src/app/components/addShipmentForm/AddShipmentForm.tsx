import { Button, Input, Spacer, Text } from "@nextui-org/react"
import * as Styles from "./AddShipmentForm.styles"
import { useAddShipmentMutation } from "../../hooks/shipment/useAddShipmentMutation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export default function AddShipmentForm() {
  const [name, setName] = useState<string | null>(null);
  const [pickupAddress, setPickupAddress] = useState<string | null>(null);
  const [dropOffAddress, setDropOffAddress] = useState<string | null>(null);
  const { mutate, isError, error } = useAddShipmentMutation();

  const navigate = useNavigate();
  const errors = error as AxiosError;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pickupAddress && dropOffAddress && name) {
      mutate({
        name,
        pickupAddress,
        dropOffAddress
      });
    }
    if (!isError) {
      setName("");
      setPickupAddress("");
      setDropOffAddress("");
      navigate("/shipments")
    }

  }

  useEffect(() => {
    console.log(pickupAddress, "pickupAddress")
  }, [pickupAddress])
  return (
    <form onSubmit={handleSubmit}>
      <Styles.Contaienr>
        {
          isError && (
            <Text h4 color="red">
              {errors.message}
            </Text>
          )
        }

        <Text h3> Add Shipment Detailes</Text>
        <Spacer />
        <Input
          value={name as string}
          onChange={(e) => setName(e.target.value)}
          width="30%"
          clearable
          label="shipment name"
          rounded={false}
          type="text"
          size="md" required placeholder="shipment name" />
        <Spacer x={2} />
        <Input
          value={pickupAddress as string}
          onChange={(e) => setPickupAddress(e.target.value)}
          width="30%"
          clearable
          label="pickup address"
          rounded={false}
          type="text"
          size="md" required placeholder="PickUpAddress" />
        <Spacer x={2} />
        <Input
          value={dropOffAddress as string}
          onChange={(e) => setDropOffAddress(e.target.value)}
          width="30%"
          label="dropoff address"
          clearable
          rounded={false}
          type="text"
          size="md" required placeholder="drop off address" />
        <Spacer y={2} />
        <Button
          data-testid="add-button"
          disabled={!name || !pickupAddress || !dropOffAddress}
          type="submit"
        >
          <p>
            Add Shipment
          </p>
        </Button>
      </Styles.Contaienr>
    </form>

  )
}
