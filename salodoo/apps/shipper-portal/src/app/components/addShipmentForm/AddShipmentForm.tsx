import {  Button, Input, Spacer, Text } from "@nextui-org/react"
import * as Styles from "./AddShipmentForm.styles"

export default function AddShipmentForm(){ 
     return(
      <Styles.Contaienr>
        <Text h3> Add Shipment Detailes</Text>
        <Spacer />
        <Input 
         width="30%"
          clearable
          label="shipment name"
            rounded = {false} 
            type="text" 
           size="md" required placeholder="shipment name" />
          <Spacer x = {2}/>
        <Input 
         width="30%"
          clearable
          label="pickup address"
            rounded = {false} 
            type="text" 
           size="md" required placeholder="PickUpAddress" />
          <Spacer x = {2}/>
           <Input 
        width="30%"
          label="dropoff address"
          clearable
            rounded = {false} 
            type="text" 
           size="md" required placeholder="drop off address" />
        <Spacer y={2} />
        <Button>
          Add Shipment
        </Button>
      </Styles.Contaienr>
     )
}