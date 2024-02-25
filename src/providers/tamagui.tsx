import '../../tamagui-web.css';

import { TamaguiProvider as Tamagui } from 'tamagui';
import { tamaguiConfig } from '../../tamagui.config';

const TamaguiProvider = ({ children }: { children: React.ReactNode }) => {
  return <Tamagui config={tamaguiConfig}>{children}</Tamagui>;
};

export default TamaguiProvider;
