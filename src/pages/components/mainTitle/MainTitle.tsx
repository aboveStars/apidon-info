import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ShortcutButton from "./ShortcutButton";

export default function MainTitle() {
  return (
    <Flex direction="column" align="center" gap="3">
      <Flex id="title-des" direction="column" align="center">
        <Flex id="main-title-flex">
          <Text
            as="b"
            fontSize="6xl"
            color="white"
            id="main-title"
            textAlign="center"
          >
            The Next Generation Social Media
          </Text>
        </Flex>
        <Flex id="description-flex">
          <Text
            as="i"
            color="gray.500"
            fontSize="1xl"
            id="description"
            textAlign="center"
            maxWidth="55rem"
          >
            The magnificent platform enables users to select their algorithms,
            create NFTs that are marketable, and additionally welcomes algorithm
            creators to participate and generate income.
          </Text>
        </Flex>
      </Flex>

      <Flex
        id="shortcut-buttons"
        gap="2"
        direction={{
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <ShortcutButton
          title="Unleash Your Vision"
          description="Empowering users with limitless algorithmic choice!"
        />
        <ShortcutButton
          title="Unlock Profits"
          description="Empower your company by creating user-centric algorithms on our platform!"
        />
        <ShortcutButton
          title="Unlock Creativity"
          description=" Easily Craft and Trade NFTs on Our Platform!"
        />
      </Flex>
    </Flex>
  );
}
