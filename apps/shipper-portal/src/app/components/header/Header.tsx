import { Button, Spacer, Text } from "@nextui-org/react";
import * as Styles from "./header.styles"
import { useNavigate } from "react-router-dom";
import { Shipment } from "../../types/shipment";

interface IHeaderProps {
  shipments: Shipment[];
}

export default function Header({ shipments }: IHeaderProps) {
  const navigate = useNavigate();

  const navigateToPage = (page: string) => {
    navigate(page)
  }

  return (
    <Styles.HeaderContainer>
      <Text h2> Welcome To Salodoo</Text>
      <br />
      {shipments && shipments.length > 0 ? (
        <Styles.FlexContainer>
          <Button onClick={() => {
            navigateToPage("/shipments")
          }} flat size="md"  >

            <p data-testid="shipments">
              Your Shipments
            </p>

          </Button>
          <Button data-testid="add-shipment" onClick={() => {
            navigate("/add-shipment")
          }} size="md"> Add  Shipment</Button>

        </Styles.FlexContainer>
      ) : (
        <>
          <Text color="gray" h3>
            You Haven't added any shipmments yet
          </Text>
          <Spacer />
          <Button data-testid="add-shipment" onClick={() => {
            navigateToPage("/add-shipment")
          }} size="lg">
            Add Shipment
          </Button>
        </>
      )}

    </Styles.HeaderContainer>
  )
}
