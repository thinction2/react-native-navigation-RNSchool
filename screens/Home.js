import React from "react";
import styled from "styled-components";

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

export default function Home({ navigation }) {
  return (
    <Container>
      <Text>Master List Screen</Text>
      <Button>
        <ButtonText
          onPress={() =>
            navigation.push("Details", { name: "React Native by Example" })
          }
        >
          React Native by Example
        </ButtonText>
      </Button>
      <Button>
        <ButtonText
          onPress={() =>
            navigation.push("Details", { name: "React Native School" })
          }
        >
          React Native School
        </ButtonText>
      </Button>
      <Button>
        <ButtonText onPress={() => navigation.toggleDrawer()}>
          Drawer
        </ButtonText>
      </Button>
    </Container>
  );
}
