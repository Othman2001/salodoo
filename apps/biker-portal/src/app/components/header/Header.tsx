import { useNavigate } from "react-router-dom";
import { Styles } from "@sharedUi"
import { Button, Spacer, Text } from "@nextui-org/react";

export default function Header() {
  const navigate = useNavigate();

  const navigateToPage = (page: string) => {
    navigate(page)
  }
  return (
    <Styles.HeaderContainer height="60vh">
      <Text h3 >
        It Is Time To Deliver Some Shipments
      </Text>
      <Spacer />
      <Styles.FlexContainer>
        <Button onClick={() => navigateToPage("/my-shipments")} flat>
          View Your shipments
        </Button>
        <Button onClick={() => navigateToPage("/shipments")}>
          Browser Shipments
        </Button>
      </Styles.FlexContainer>
    </Styles.HeaderContainer>
  )
}
