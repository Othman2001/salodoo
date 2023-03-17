import { Button, Spacer, Text } from "@nextui-org/react";
import * as Styles from "./header.styles"
import { useNavigate } from "react-router-dom";
import useGetShipments from "../../hooks/shipment/useGetShipments";

export default function Header() {
  const navigate = useNavigate();
  const navigateToAddShipmentPage = () => {
    console.log("navigated")
    navigate("/add-shipment");
  }
  const { data } = useGetShipments();
  return (
    <Styles.HeaderContainer>
      <Text h2> Welcome To Salodoo</Text>
      <br />
      {data && data.length > 0 ? (
        <Styles.FlexContainer>

          <Button flat size="md"  >Your Shipments </Button>
          <Button size="md"> Add Your Shipments</Button>

        </Styles.FlexContainer>
      ) : (
        <>
          <Text color="gray" h3>
            You Haven't added any shipmments yet
          </Text>
          <Spacer />
          <Button onClick={navigateToAddShipmentPage} size="lg">
            Add Shipment
          </Button>
        </>
      )}

    </Styles.HeaderContainer>
  )
}
