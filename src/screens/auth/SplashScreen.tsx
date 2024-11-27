import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useColorScheme } from "nativewind";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { blurhash } from "@/utils/helpers";


const SplashScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { navigate }: NavigationProp<SplashNavigationType> = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate("Welcome");
    }, 2000);
  });
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <View className="w-full items-center">
        <Animated.View
          className={`flex-row justify-center items-center`}
          entering={FadeInRight.duration(100).springify()}
        >
          <View className={``}>
            <View className={`w-20 h-20 overflow-hidden`}>
              <Image
                source={require("../../../assets/images/logo.png")}
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
                style={{ width: "100%", height: "100%" }}
                className="w-full h-full"
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          className={`flex-row justify-center items-center gap-1`}
          entering={FadeInRight.duration(100).delay(200).springify()}
        >
          <Text
            className="text-neutral-600 text-xl leading-[60px]"
            style={{ fontFamily: "PlusJakartaSans" }}
          >
            STACKS
          </Text>
          <Text
            className="text-[#31ACA3] text-xl leading-[60px]"
            style={{ fontFamily: "PlusJakartaSansBoldItalic" }}
          >
            CRYPTO
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
