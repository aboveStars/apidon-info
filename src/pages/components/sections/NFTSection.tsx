import { Flex } from "@chakra-ui/react";
import GeneralTitle from "../generalTitles/GeneralTitle";

export default function NFTSection() {
  return (
    <Flex direction="column">
      <GeneralTitle
        title="Unlock Creativity"
        description="Transform your posts into timeless treasures."
        titleName="unlock"
      />
      <GeneralTitle
        title="Elevate Your Content to Unprecedented Value"
        description="Imagine turning your posts into unique, verifiable digital assets that resonate with collectors, enthusiasts, and art aficionados across the globe. With just a few clicks, your words, images, and ideas become captivating NFTs, ready to be showcased, traded, and celebrated."
        titleName="elevateYour"
      />
      <GeneralTitle
        title="Seize New Horizons of Opportunity"
        description="Step into the forefront of a booming ecosystem by creating, sharing, and selling your NFTs right from our platform. Diversify your revenue streams, explore untapped avenues of monetization, and be a part of the ever-expanding NFT revolution."
        titleName="seize"
      />
      <GeneralTitle
        title="Craft. Share. Thrive"
        description="Crafting NFTs from your posts isn't just about tokenizing content; it's about embracing the future of digital ownership. Join a community of creators who are redefining the way art, ideas, and innovation are appreciated and valued."
        titleName="craft"
      />
      <GeneralTitle
        title="Your Creative Journey Starts Here"
        description="Ignite your passion, catalyze your potential, and embark on an immersive adventure where your imagination knows no bounds. Our NFT-making feature isn't just a tool; it's a gateway to uncharted dimensions of creativity and prosperity."
        titleName="your"
      />
      <GeneralTitle
        title="Enter the Realm of NFTs with Us"
        description="Turn your content into an everlasting legacy that transcends time, space, and conventional norms. Join now and make your mark in the vibrant tapestry of the NFT universe."
        titleName="enter"
      />
    </Flex>
  );
}
