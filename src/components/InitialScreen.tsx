import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function InitialScreen() {
  return (
    <Flex
      position="fixed"
      width="100%"
      height="100%"
      justify="center"
      align="center"
      direction="column"
    >
      <Spinner width="16rem" height="16rem" color="white" />
      <Text color="white" fontSize="5xl" fontWeight="700" position="absolute">
        APIDON
      </Text>
    </Flex>
  );
}
