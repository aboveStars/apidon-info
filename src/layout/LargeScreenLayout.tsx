import StarsAnimatedBg from "@/animatedBg/StarsAnimatedBg";
import { backgroundEngineStateAtom } from "@/atoms/backgroundEngineStateAtom";
import { firstContentReadyStateAtom } from "@/atoms/firstContentReadyStateAtom";
import InitialScreen from "@/components/InitialScreen";
import FooterSection from "@/components/sections/FooterSection";
import LargePhoneSection from "@/components/sections/LargePhoneSection";
import NFTSection from "@/components/sections/NFTSection";
import ProviderSection from "@/components/sections/ProviderSection";
import UserSection from "@/components/sections/UserSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function LargeScreenLayout() {
  const bgEngineReadyValue = useRecoilValue(backgroundEngineStateAtom);
  const firstContentReadyStateValue = useRecoilValue(
    firstContentReadyStateAtom
  );

  const [readyWeAre, setReadyWeAre] = useState(false);

  useEffect(() => {
    setReadyWeAre(
      bgEngineReadyValue.backgroundInitialized && firstContentReadyStateValue
    );
  }, [bgEngineReadyValue.backgroundInitialized, firstContentReadyStateValue]);

  return (
    <Flex id="lg-screen">
      {!readyWeAre && <InitialScreen />}

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
