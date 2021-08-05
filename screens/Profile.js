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

export default function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);
  return (
    <Container>
      <Text>Profile Screen</Text>
      <Button>
        <ButtonText onPress={() => navigation.toggleDrawer()}>
          Drawer
        </ButtonText>
      </Button>
      <Button>
        <ButtonText onPress={() => signOut()}>Sign Out</ButtonText>
      </Button>
    </Container>
  );
}
