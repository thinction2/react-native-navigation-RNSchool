import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const Text = styled.Text``;

const Button = styled.TouchableOpacity`
  margin-top: 8px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  color: blue;
`;

export default function SignIn({ navigation }) {
  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <Text>Sign In Screen</Text>
      <Button onPress={() => signIn()}>
        <ButtonText>Sign In</ButtonText>
      </Button>
      <Button onPress={() => navigation.push("CreateAccount")}>
        <ButtonText>Create Account</ButtonText>
      </Button>
    </Container>
  );
}
