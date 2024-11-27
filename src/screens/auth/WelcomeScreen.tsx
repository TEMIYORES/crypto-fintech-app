import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";
import Button from "@/src/components/Button";
import ButtonOutline from "@/src/components/ButtonOutline";
import Breaker from "@/src/components/Breaker";
import { AntDesign } from "@expo/vector-icons";
import { blurhash } from "@/utils/helpers";
const WelcomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-between items-center bg-white">
      <StatusBar style="auto" />
      <View className="w-full px-4 items-center justify-center gap-10 h-full">
        <View className="justify-center items-center gap-10">
          {/* Welcome Text and Logo */}
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
          <Animated.Text
            className="text-5xl font-bold text-neutral-500"
            style={{ fontFamily: "PlusJakartanSansBold" }}
            entering={FadeInDown.delay(100).duration(100).springify()}
          >
            Welcome
          </Animated.Text>
        </View>
        {/* Login and Sign Up Button */}
        <View className="w-full justify-start gap-5">
          <Animated.View
            entering={FadeInDown.delay(300).duration(100).springify()}
          >
            <Button title="Login" />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(500).duration(100).springify()}
          >
            <ButtonOutline title={"Sign Up"} />
          </Animated.View>
        </View>
        <Breaker />
        <View className="w-full justify-start gap-5">
          <Animated.View
            entering={FadeInDown.delay(900).duration(100).springify()}
          >
            <ButtonOutline
              title={"Continue with Google"}
              children={<AntDesign name="google" size={20} color={"gray"} />}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(1100).duration(100).springify()}
          >
            <ButtonOutline
              title={"Continue with App"}
              children={<AntDesign name="apple1" size={20} color={"gray"} />}
            />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
