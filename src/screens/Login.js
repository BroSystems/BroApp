import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Typography, View, Text, TextField, Button } from "react-native-ui-lib"; //eslint-disable-line
import { KeyboardAwareInsetsView } from "react-native-keyboard-tracking-view";
import { toBrosList, LOGIN_SCREEN } from "./";

const AuthService = require("../services/auth-service");

const INPUT_SPACING = 10;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameError: "",
      passwordError: "",
      username: "",
      password: ""
    };
  }

  onChangeUsername = username => {
    if (username === "") {
      this.setState({ usernameError: "Bad username bro" });
    } else {
      this.setState({ usernameError: null });
      this.setState({ username });
    }
  };

  onChangePassword = password => {
    if (password === "") {
      this.setState({ passwordError: "Bad password bro" });
    } else {
      this.setState({ passwordError: null });
      this.setState({ password });
    }
  };

  onLoginPressed = async () => {
    const { username, password } = this.state;
    let isValidLoginParameters = true;
    if (!username && username.length == 0) {
      isValidLoginParameters = false;
      this.setState({ usernameError: "Bad username bro" });
    }
    if (!password && password.length == 0) {
      isValidLoginParameters = false;
      this.setState({ passwordError: "Bad password bro" });
    }
    if (!isValidLoginParameters) return;

    const user = await AuthService.auth(
      this.state.username,
      this.state.password
    );
    if (!user) {
      console.error("failed to login to user");
    } else {
      toBrosList(this.props.componentId);
    }
  };

  render() {
    return (
      <View flex style={styles.container}>
        <ScrollView scrollEnabled={false} style={{height: '100%'}}>
          <View>
            <Text style={{ marginBottom: 20, marginRight: 20, textAlign: 'center' }} text40>
              BroApp
            </Text>

            <TextField
              text70
              marginBottom={INPUT_SPACING}
              floatingPlaceholder
              placeholder="username"
              onChangeText={this.onChangeUsername}
              error={this.state.usernameError}
              test={this.username}
              floatOnFocus
            />
            <TextField
              secureTextEntry={true}
              text70
              margin={12}
              floatingPlaceholder
              placeholder="password"
              onChangeText={this.onChangePassword}
              error={this.state.passwordError}
              test={this.password}
              floatOnFocus
            />
          </View>
          <Button
            label={"Login"}
            round={true}
            style={{ height: 40, marginTop: INPUT_SPACING }}
            onPress={this.onLoginPressed}
            disabled={false}
          />
          <KeyboardAwareInsetsView />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'stretch',
    margin: 25,
    height: "100%"
  },
  title: {
    ...Typography.text20
  },
  header: {
    ...Typography.text60,
    marginVertical: 20
  }
});
