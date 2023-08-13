import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  description: string;
};

export default function ExplanationCard({ title, description }: Props) {
  const [ecRef, inView] = useInView({
    triggerOnce: false,
  });

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
      ref={ecRef}
      transition="transform 0.8s ease-in-out"
      transform="auto"
      scale={inView ? 1 : 0}
    >
      <Text
        bgGradient="linear(to-l,#2193b0, #6dd5ed)"
        bgClip="text"
        fontSize="xl"
        fontWeight="extrabold"
        lineHeight="normal"
        minHeight={{
          base: "unset",
          lg: "3.8rem",
        }}
        _selection={{
          backgroundColor: "cyan",
          color: "white",
        }}
      >
        {title}
      </Text>
      <Text
        color="#adabb2"
        fontSize="md"
        fontWeight="500"
        _selection={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        {description}
      </Text>
    </Flex>
  );
}
