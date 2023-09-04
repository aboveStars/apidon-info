import FooterSection from "@/components/sections/FooterSection";
import NFTSection from "@/components/sections/NFTSection";
import ProviderSection from "@/components/sections/ProviderSection";
import SmallPhoneSection from "@/components/sections/SmallPhoneSection";
import UserSection from "@/components/sections/UserSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function SmallScreenLayout() {
  return (
    <Flex id="small-screen" direction="column">
      <Image src="/bgForMobile.png" position="fixed" objectFit="fill" />
      <SmallPhoneSection />
      <WelcomeSection />
      <UserSection />
      <NFTSection />
      <ProviderSection />
      <FooterSection />
    </Flex>
  );
}
