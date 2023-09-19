import { Box, Flex } from "@chakra-ui/react";
import Title from "../Title";

export default function NFTSection() {
  return (
    <Flex direction="column">
      <Title
        title="Enter the Realm of NFTs with Us"
        description="Imagine turning your posts into unique, verifiable digital assets that resonate globally. With just a few clicks, your words, images, and ideas become captivating NFTs, ready to be showcased, traded, and celebrated."
        titleId="nft"
      />
      <Box height="100vh" width="100%" zIndex={1} />
    </Flex>
  );
}
