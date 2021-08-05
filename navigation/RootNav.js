import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoggedInNav from "./LoggedInNav";
import AuthStackNav from "./AuthStackNav";

const RootStack = createStackNavigator();

export default function RootNav({ userToken }) {
  return (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={LoggedInNav}
          options={{ animationEnabled: false }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackNav}
          options={{ animationEnabled: false }}
        />
      )}
    </RootStack.Navigator>
  );
}
