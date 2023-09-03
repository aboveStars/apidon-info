import StarsAnimatedBg from "@/animatedBg/StarsAnimatedBg";
import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";
import FooterSection from "@/components/sections/FooterSection";
import LargePhoneSection from "@/components/sections/LargePhoneSection";
import NFTSection from "@/components/sections/NFTSection";
import ProviderSection from "@/components/sections/ProviderSection";
import UserSection from "@/components/sections/UserSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import { Box, Flex } from "@chakra-ui/react";

import React from "react";
import { useRecoilValue } from "recoil";

export default function LargeScreenLayout() {
  const videosAreReadyState = useRecoilValue(videosAreReadyStateAtom);

  return (
    <Flex id="lg-screen">
      <StarsAnimatedBg/>
      <Box flex="1" minHeight="100vh" hidden={!videosAreReadyState}>
        <WelcomeSection />
        <UserSection />
        <NFTSection />
        <ProviderSection />
        <FooterSection />
      </Box>
      <Box
        flex="1"
        position="sticky"
        height="100vh"
        top={0}
        right={0}
        hidden={!videosAreReadyState}
      >
        <LargePhoneSection />
      </Box>
    </Flex>
  );
}
