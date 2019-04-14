import { Navigation } from "react-native-navigation";

import Login from "./Login";
import BrosList from "./Bros";

export const LOGIN_SCREEN = "broapp.LoginScreen";
export const BROS_SCREEN = "broapp.BrosScreen";

export const Screens = (() => {
  const screens = new Map();
  screens.set(LOGIN_SCREEN, Login);
  screens.set(BROS_SCREEN, BrosList);
  return screens;
})();

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: LOGIN_SCREEN,
              passProps: {
                text: "Login text"
              },
              options: {
                topBar: {
                  title: {
                    text: "Login"
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
};

export const toBrosList = fromComponentId => {
  console.log(`to bros list from ${fromComponentId}`);
  Navigation.setStackRoot(fromComponentId, [{
        component: {
          name: BROS_SCREEN,
          passProps: {
            text: "Bros screen"
          },
          options: {
            topBar: {
              title: {
                text: "BrosScreen"
              }
            }
          }
        }
  }]);
};
