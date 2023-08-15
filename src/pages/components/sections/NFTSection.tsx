import { Flex } from "@chakra-ui/react";
import Title from "../new/Title";

export default function NFTSection() {
  return (
    <Flex direction="column">
      <Title
        title="Enter the Realm of NFTs with Us"
        description="Turn your content into an everlasting legacy that transcends time, space, and conventional norms. Join now and make your mark in the vibrant tapestry of the NFT universe."
        titleName="enter"
      />
      <Title
        title="Elevate Your Content to Unprecedented Value"
        description="Imagine turning your posts into unique, verifiable digital assets that resonate with collectors, enthusiasts, and art aficionados across the globe. With just a few clicks, your words, images, and ideas become captivating NFTs, ready to be showcased, traded, and celebrated."
        titleName="elevateYour"
      />

      <Title
        title="Craft. Share. Thrive"
        description="Crafting NFTs from your posts isn't just about tokenizing content; it's about embracing the future of digital ownership. Join a community of creators who are redefining the way art, ideas, and innovation are appreciated and valued."
        titleName="craft"
      />
    </Flex>
  );
}
