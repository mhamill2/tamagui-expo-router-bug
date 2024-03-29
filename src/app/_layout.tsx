import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';

import '../../tamagui-web.css';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '../../tamagui.config';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)'
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Slot />
    </TamaguiProvider>
  );
};

export default RootLayout;
