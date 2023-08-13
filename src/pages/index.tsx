import { Flex } from "@chakra-ui/react";

import GeneralTitle from "./components/generalTitles/GeneralTitle";
import PhoneMockUp from "./components/phoneMockup/PhoneMockUp";
import NFTSection from "./components/sections/NFTSection";
import UserSection from "./components/sections/UserSection";
import ProviderSection from "./components/sections/ProviderSection";

export default function Home() {
  return (
    <>
      <PhoneMockUp />
      <Flex
        justify="center"
        id="root-component"
        width="100%"
        direction="column"
      >
        <GeneralTitle
          title="The Next Generation Social Media"
          description=" The magnificent platform enables users to select their algorithms,
   create NFTs that are marketable, and additionally welcomes algorithm
   creators to participate and generate income."
          titleName="theNext"
        />
        <UserSection />
        <NFTSection />
        <ProviderSection />
      </Flex>
    </>
  );
}
