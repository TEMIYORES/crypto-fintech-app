import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
interface ButtonOutlineProps {
  title: any;
  action?: () => void;
  children?: React.ReactNode;
}
const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  title,
  action,
  children,
}) => {
  return (
    <TouchableOpacity
      className="flex-row gap-2 bg-white border border-neutral-400 rounded-lg justify-center items-center py-4 px-10"
      onPress={action}
    >
      {children && <View>{children}</View>}
      <Text className="text-neutral-500 font-bold text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOutline;
