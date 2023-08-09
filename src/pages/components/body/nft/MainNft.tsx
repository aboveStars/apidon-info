import { Flex, Text } from "@chakra-ui/react";

import ExplanationCard from "../ExplanationCard";

export default function MainNft() {
  return (
    <Flex
      justify="center"
      align="center"
      width="100%"
      direction="column"
      gap="4"
      id="nft-root-area"
    >
      <Flex id="nft-title-des" maxWidth="60rem" direction="column" gap="2">
        <Text
          fontWeight="extrabold"
          fontSize="6xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          id="main-title"
          textAlign="center"
          lineHeight="1"
        >
          Unlock Creativity
        </Text>
        <Text
          as="i"
          color="gray.500"
          id="provider-part-first-section"
          textAlign="center"
        >
          Transform your posts into timeless treasures.
        </Text>
      </Flex>

      <Flex
        id="nft-explanation-card-area"
        gap="2"
        px="2"
        direction={{
          base: "column",
          lg: "row",
        }}
      >
        <ExplanationCard
          title="Elevate Your Content to Unprecedented Value"
          description="Imagine turning your posts into unique, verifiable digital assets that resonate with collectors, enthusiasts, and art aficionados across the globe. With just a few clicks, your words, images, and ideas become captivating NFTs, ready to be showcased, traded, and celebrated."
        />
        <ExplanationCard
          title="Seize New Horizons of Opportunity"
          description="Step into the forefront of a booming ecosystem by creating, sharing, and selling your NFTs right from our platform. Diversify your revenue streams, explore untapped avenues of monetization, and be a part of the ever-expanding NFT revolution."
        />
        <ExplanationCard
          title="Craft. Share. Thrive"
          description="Crafting NFTs from your posts isn't just about tokenizing content; it's about embracing the future of digital ownership. Join a community of creators who are redefining the way art, ideas, and innovation are appreciated and valued."
        />
        <ExplanationCard
          title="Your Creative Journey Starts Here"
          description="Ignite your passion, catalyze your potential, and embark on an immersive adventure where your imagination knows no bounds. Our NFT-making feature isn't just a tool; it's a gateway to uncharted dimensions of creativity and prosperity."
        />
        <ExplanationCard
          title="Enter the Realm of NFTs with Us"
          description="Turn your content into an everlasting legacy that transcends time, space, and conventional norms. Join now and make your mark in the vibrant tapestry of the NFT universe."
        />
      </Flex>
    </Flex>
  );
}
