import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import CreateAccount from "../screens/CreateAccount";

const stack = createStackNavigator();

export default function AuthStackNav(params) {
  return (
    <stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ title: "Create Account" }}
      />
    </stack.Navigator>
  );
}
