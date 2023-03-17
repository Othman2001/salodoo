import { Button, Spacer, Text } from "@nextui-org/react";
import * as Styles from "./header.styles"

export default function Header() {
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
            <Button  size="lg"> 
                Add Shipment
            </Button>
            </Styles.HeaderContainer>

        </header>
    )
}