import { Screens, startApp } from './src/screens';
import { Navigation } from 'react-native-navigation';

Screens.forEach((ScreenComponent, key) => Navigation.registerComponent(key, () => ScreenComponent));

Navigation.events().registerAppLaunchedListener(() => {
  if(__DEV__) {
    console.log(`App - dev env`)
  }
  startApp();
});