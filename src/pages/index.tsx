import { Flex } from "@chakra-ui/react";

import GeneralTitle from "./components/generalTitles/GeneralTitle";
import PhoneMockUp from "./components/phoneMockup/PhoneMockUp";
import NFTSection from "./components/sections/NFTSection";
import ProviderSection from "./components/sections/ProviderSection";
import UserSection from "./components/sections/UserSection";
import WelcomeSection from "./components/sections/WelcomeSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PhoneMockUp />

      <GeneralTitle
        title="The Next Generation Social Media"
        description="The magnificent platform enables users to select their algorithms,
        create NFTs that are marketable, and additionally welcomes algorithm
        creators to participate and generate income."
        titleName="theNext"
      />
      <UserSection />
      <NFTSection />
      <ProviderSection />
    </>
  );
}
