import { NextUIProvider } from "@nextui-org/react";
import { NavbarComponent } from "@sharedUi";
import theme from "../theme/portal.theme";

interface ILayoutProps { 
    children: React.ReactNode;
}

export default function Layout ({children}:ILayoutProps) {
    return(
        <NextUIProvider theme = {theme}>
        <NavbarComponent/>
        <main>
        {children}
        </main>
        </NextUIProvider>
    )
}