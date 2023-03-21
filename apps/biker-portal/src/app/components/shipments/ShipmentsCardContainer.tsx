import { Card, Grid, Text } from "@nextui-org/react";
import { Styles } from "@sharedUi";
import { useGetShipments } from "../../hooks/useGetShipments";

export default function ShipmentsCarsContainer() {
  const { data } = useGetShipments();
  return (
    <Grid.Container gap={2} justify="center" >
      {data?.map((shipment) => (
        <Grid xs={3}>
          <Card variant="bordered">
            <Card.Body>
              <Text> {shipment.attributes.name} </Text>
              <Styles.FlexContainer>
                <Text size="$sm">
                  Pick Up Address: {shipment.attributes.pickUpAddress}
                </Text>
                <Text size="$sm">
                  drop off addresss: {shipment.attributes.dropOffAddress}
                </Text>
              </Styles.FlexContainer>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}
