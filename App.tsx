import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Pressable, Image, Linking } from "react-native";

const driveUrl =
  "https://drive.google.com/file/d/1ioYmY4Q2DmomA7HSvluHtQSUTdV7gi7t/view?usp=drive_link";

export default function App() {
  return (
    <View className="flex-1 items-center bg-stone-700 justify-center">
      <Image
        className="rounded-full w-48 h-48 my-5 border-3"
        source={require("./assets/portfolio-image.png")}
        alt="shubham image"
        fadeDuration={300}
        blurRadius={1}
      />
      <Text className="font-bold text-xl text-white rounded-xl text-center mx-20 my-5">
        Hello, I'm Shubham, Full Stack Developer
      </Text>
      <Text className="font-normal text-base text-white mx-8 my-5 text-left">
        Experienced Full Stack Developer proficient in Next.js, Tailwind CSS,
        and TypeScript. Skilled in designing and developing efficient web
        applications with a passion for problem-solving and continuous learning.
      </Text>
      <Pressable onPress={() => Linking.openURL(driveUrl)}>
        <Text className="font-bold text-xl button px-3 bg-stone-200 rounded py-2 invert drop-shadow-xl blur-md">
          Download Resume
        </Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}
