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

export default function Details({ route }) {
  return (
    <Container>
      <Text>Details Screen</Text>
      {route.params.name && <Text>{route.params.name}</Text>}
    </Container>
  );
}
