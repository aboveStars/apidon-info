import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Title from "../Title";
import Phone from "../Phone";
import UserSection from "../../sections/UserSection";
import NFTSection from "../../sections/NFTSection";
import ProviderSection from "../../sections/ProviderSection";

type Props = {};

export default function Layout({}: Props) {
  return (
    <Flex>
      <Box flex="1">
        <Title
          titleName="theNext"
          title="The Next Generation Social Media"
          description="The magnificent platform enables users to select their algorithms,
        create NFTs that are marketable, and additionally welcomes algorithm
        creators to participate and generate income."
        />
        <UserSection />
        <NFTSection />
        <ProviderSection />
      </Box>
      <Box flex="1" position="sticky" height="100vh" top={0} right={0} zIndex={-1}>
        <Phone />
      </Box>
    </Flex>
  );
}
