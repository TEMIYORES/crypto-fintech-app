import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components/native";
import "./global.css";
import RootNavigation from "./src/screens/navigation/RootNavigation";
import useCachedResources from "./hooks/useCachedResources";

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Container>
      <StatusBar style="auto" />
      <RootNavigation />
    </Container>
  );
};

export default App;

export const Container = styled(View)`
  flex: 1;
`;
