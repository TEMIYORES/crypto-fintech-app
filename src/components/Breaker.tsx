import { View, Text } from "react-native";
import React from "react";
import Animated, { FadeInRight } from "react-native-reanimated";

const Breaker = () => {
  return (
    <Animated.View
      entering={FadeInRight.delay(700).duration(100).springify()}
      className={"w-full flex-row items-center gap-5"}
    >
      <View className="h-0.5 flex-grow justify-center bg-neutral-300 items-center"></View>
      <Text className="text-xl text-neutral-400 font-bold">Or</Text>
      <View className="h-0.5 flex-grow justify-center bg-neutral-300 items-center"></View>
    </Animated.View>
  );
};

export default Breaker;
