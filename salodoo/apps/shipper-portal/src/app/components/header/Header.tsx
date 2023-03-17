import { Button, Spacer, Text } from "@nextui-org/react";
import * as Styles from "./header.styles"
import { useNavigate } from "react-router-dom";
import { useAddShipmentMutation } from "../../hooks/shipment/useAddShipmentMutation";

export default function Header() {
    const navigate = useNavigate();
    const navigateToAddShipmentPage= ()=>{
        console.log("navigated")
        navigate("/add-shipment");
    }
    return( 
        <header>
            <Styles.HeaderContainer>
            <Text h2   > 
                Welcome to our shipper portal
            </Text>
            <br/>
            <Text color="gray" h3>
                You Haven't added any shipmments yet
            </Text>
            <Spacer />
            <Button  onClick={navigateToAddShipmentPage} size="lg"> 
                Add Shipment
            </Button>
            </Styles.HeaderContainer>

        </header>
    )
}