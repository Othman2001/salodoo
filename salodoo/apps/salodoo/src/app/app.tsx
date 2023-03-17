import { NextUIProvider } from '@nextui-org/react';
import {NavbarComponent } from '@sharedUi'

export function App() {
  return (
    <NextUIProvider>
      <NavbarComponent />
    </NextUIProvider>
  );
}

export default App;
