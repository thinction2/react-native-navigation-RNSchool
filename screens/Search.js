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

export default function Search({ navigation }) {
  return (
    <Container>
      <Text>Search Screen</Text>
      <Button>
        <ButtonText onPress={() => navigation.push("Search2")}>
          Search 2
        </ButtonText>
      </Button>
      <Button>
        <ButtonText
          onPress={() =>
            navigation.navigate("Home", {
              screen: "Details",
              params: { name: "React Native School" },
            })
          }
        >
          React Native School
        </ButtonText>
      </Button>
    </Container>
  );
}
