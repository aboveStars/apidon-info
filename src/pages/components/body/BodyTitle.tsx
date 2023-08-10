import { Flex, Text } from "@chakra-ui/react";

import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  description: string;
};

export default function BodyTitle({title, description}: Props) {
  const [titleAndDesRef, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <Flex
      id="user-title-and-des"
      maxWidth="60rem"
      direction="column"
      gap="2"
      ref={titleAndDesRef}
      transition="transform 1s ease-in-out"
      transform={`scale(${inView ? "1" : "0.1"})`}
    >
      <Text
        fontSize="6xl"
        bgGradient="linear(to-l, #e4e4d9, #215f00)"
        bgClip="text"
        id="main-title"
        textAlign="center"
        fontWeight="extrabold"
        lineHeight="1"
      >
        {title}
      </Text>
      <Text
        as="i"
        color="gray.500"
        id="user-part-first-section"
        textAlign="center"
      >
       {description}
      </Text>
    </Flex>
  );
}
