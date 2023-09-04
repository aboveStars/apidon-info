import StarsAnimatedBg from "@/animatedBg/StarsAnimatedBg";
import { backgroundEngineStateAtom } from "@/atoms/backgroundEngineStateAtom";
import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";
import FooterSection from "@/components/sections/FooterSection";
import LargePhoneSection from "@/components/sections/LargePhoneSection";
import NFTSection from "@/components/sections/NFTSection";
import ProviderSection from "@/components/sections/ProviderSection";
import UserSection from "@/components/sections/UserSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function LargeScreenLayout() {
  const videosAreReadyState = useRecoilValue(videosAreReadyStateAtom);
  const bgEngineReadyValue = useRecoilValue(backgroundEngineStateAtom);

  const [readyWeAre, setReadyWeAre] = useState(false);

  useEffect(() => {
    setReadyWeAre(
      bgEngineReadyValue.backgroundInitialized && videosAreReadyState
    );
  }, [videosAreReadyState, bgEngineReadyValue.backgroundInitialized]);

  return (
    <Flex id="lg-screen">
      {!readyWeAre && (
        <Flex
          position="fixed"
          width="100%"
          height="100vh"
          justify="center"
          align="center"
          direction="column"
        >
          <Spinner width="16rem" height="16rem" color="white" />
          <Text
            color="white"
            fontSize="5xl"
            fontWeight="700"
            position="absolute"
          >
            APIDON
          </Text>
        </Flex>
      )}

      <Box hidden={!readyWeAre}>
        <StarsAnimatedBg />
      </Box>

      <Box flex="1" minHeight="100vh" hidden={!readyWeAre}>
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
        hidden={!readyWeAre}
      >
        <LargePhoneSection />
      </Box>
    </Flex>
  );
}
