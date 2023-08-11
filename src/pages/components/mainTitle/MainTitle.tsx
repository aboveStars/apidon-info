import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import ShortcutButton from "./ShortcutButton";
import { useInView } from "react-intersection-observer";

export default function MainTitle() {
  const [mainTitleRef, mainTitleInView] = useInView({
    triggerOnce: false,
  });

  return (
    <Flex
      align="center"
      ml="20"
      id="root-main-title"
      width="100%"
      height="100vh"
    >
      <Flex
        id="title-des"
        direction="column"
        align="center"
        maxWidth="40rem"
        gap="5"
        transition="transform 1s ease-in-out"
        transform={`scale(${mainTitleInView ? "1" : "0"})`}
        ref={mainTitleRef}
      >
        <Text
          fontWeight="extrabold"
          lineHeight="normal"
          fontSize="7xl"
          bgGradient="linear(to-l, #e4e4d9, #215f00)"
          bgClip="text"
          id="main-title"
          textAlign="left"
          _selection={{
            backgroundColor: "green",
            color: "white",
          }}
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
          _selection={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          The magnificent platform enables users to select their algorithms,
          create NFTs that are marketable, and additionally welcomes algorithm
          creators to participate and generate income.
        </Text>
      </Flex>

      {/* <Flex id="shortcut-buttons" gap="4" direction="column">
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
      </Flex> */}

     
    </Flex>
  );
}
