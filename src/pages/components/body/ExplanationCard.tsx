import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function ExplanationCard({ title, description }: Props) {
  return (
    <Flex
      direction="column"
      width={{
        base: "100%",
        lg: "20rem",
      }}
      height={{
        base: "unset",
        lg: "25rem",
      }}
      border="1px solid rgba(255,255,255,.12)"
      borderRadius="2xl"
      gap="3"
      p="3"
    >
      <Text
        bgGradient="linear(to-r,#0074D9, #2ECC40)"
        bgClip="text"
        fontSize="xl"
        fontWeight="extrabold"
        lineHeight="normal"
        minHeight={{
          base: "unset",
          lg: "3.8rem",
        }}
      >
        {title}
      </Text>
      <Text color="#adabb2" fontSize="md" fontWeight="500">
        {description}
      </Text>
    </Flex>
  );
}
