import React, { useContext } from "react";
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

export default function CreateAccount(params) {
  const { signUp } = useContext(AuthContext);
  return (
    <Container>
      <Text>Create Account Screen</Text>
      <Button>
        <ButtonText onPress={() => signUp()}>Sign Up</ButtonText>
      </Button>
    </Container>
  );
}
