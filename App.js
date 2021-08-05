import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNav from "./navigation/AuthStackNav";
import LoggedInNav from "./navigation/LoggedInNav";
import Splash from "./screens/Splash";
import { useMemo } from "react";
import { AuthContext } from "./context";
import RootNav from "./navigation/RootNav";

export default function App() {
  const [isLoading, setIsloading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsloading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsloading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsloading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootNav userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
