import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
interface ButtonProps {
  title: any;
  action?: () => void;
  children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ title, action, children }) => {
  return (
    <TouchableOpacity
      className="bg-green rounded-lg justify-center items-center py-4"
      onPress={action}
    >
      {children && <View className="">{children}</View>}
      <Text className="text-white font-bold text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
