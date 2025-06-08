// components/Themed.tsx
import { Text as DefaultText, View as DefaultView } from 'react-native';

export function Text(props: DefaultText['props']) {
  return <DefaultText {...props} />;
}

export function View(props: DefaultView['props']) {
  return <DefaultView {...props} />;
}


export default {
  primary: '#007AFF',
  background: '#ffffff',
  text: '#000000',
};