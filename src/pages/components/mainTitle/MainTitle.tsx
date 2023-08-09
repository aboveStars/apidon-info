import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ShortcutButton from "./ShortcutButton";

export default function MainTitle() {
  return (
    <Flex
      align="center"
      id="root-main-title"
      gap={{
        base: "3rem",
        lg: "15rem",
      }}
      width="100%"
      pl={{
        base: "unset",
        lg: "15rem",
      }}
      pr={{
        base: "unset",
        lg: "10rem",
      }}
      pb={{
        base: "unset",
        lg: "11rem",
      }}
      pt={{
        base: "unset",
        lg: "8rem",
      }}
      px={{
        base: 2,
      }}
      direction={{
        base: "column",
        lg: "row",
      }}
    >
      <Flex
        id="title-des"
        direction="column"
        align="center"
        maxWidth="40rem"
        gap="5"
      >
        <Text
          fontWeight="extrabold"
          lineHeight="normal"
          fontSize="6xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          id="main-title"
          textAlign="left"
        >
          The Next Generation Social Media
        </Text>

        <Text
          color="gray.500"
          fontSize="1xl"
          id="description"
          textAlign="left"
          maxWidth="55rem"
          lineHeight="normal"
          
        >
          The magnificent platform enables users to select their algorithms,
          create NFTs that are marketable, and additionally welcomes algorithm
          creators to participate and generate income.
        </Text>
      </Flex>

      <Flex id="shortcut-buttons" gap="4" direction="column">
        <ShortcutButton
          title="Unleash Your Vision"
          description="Empowering users with limitless algorithmic choice!"
          behavior={() => {
            const section = document.getElementById("user-root-area");
            section?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
        <ShortcutButton
          title="Unlock Creativity"
          description="Easily craft and trade NFTs on our platform!"
          behavior={() => {
            const section = document.getElementById("nft-root-area");
            section?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
        <ShortcutButton
          title="Be a Provider"
          description="Empower your company by creating user-centric algorithms on our platform!"
          behavior={() => {
            const section = document.getElementById("provider-root-area");
            section?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
      </Flex>
    </Flex>
  );
}
