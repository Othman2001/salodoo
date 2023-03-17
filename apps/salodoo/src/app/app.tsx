import { NextUIProvider } from '@nextui-org/react';
import {NavbarComponent } from '@sharedUi'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <NavbarComponent />
    </NextUIProvider>
      </QueryClientProvider>
  );
}

export default App;
