import { backgroundEngineStateAtom } from "@/atoms/backgroundEngineStateAtom";
import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FooterSection from "./sections/FooterSection";
import NFTSection from "./sections/NFTSection";
import PhoneSection from "./sections/PhoneSection";
import ProviderSection from "./sections/ProviderSection";
import UserSection from "./sections/UserSection";
import WelcomeSection from "./sections/WelcomeSection";

export default function Layout() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
    "2xl": false,
  });

  const bgEngineState = useRecoilValue(backgroundEngineStateAtom);
  const videosAreReadyState = useRecoilValue(videosAreReadyStateAtom);

  const [screenModeState, setScreenModeState] =
    useRecoilState(screenModStateAtom);

  useEffect(() => {
    setScreenModeState(isMobile ? "mobile" : "large");
  }, [isMobile]);

  return (
    <>
      {bgEngineState.backgroundInitialized ? (
        <>
          <Flex
            id="lg-screen"
            display={screenModeState === "mobile" ? "none" : "flex"}
          >
            <Box
              flex="1"
              zIndex="1"
              minHeight="100vh"
              hidden={!videosAreReadyState}
            >
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
              zIndex="1"
              hidden={!videosAreReadyState}
            >
              <PhoneSection />
            </Box>
          </Flex>

          <Flex
            id="small-screen"
            display={screenModeState === "mobile" ? "flex" : "none"}
            direction="column"
          >
            <PhoneSection />
            <WelcomeSection />
            <UserSection />
            <NFTSection />
            <ProviderSection />
            <FooterSection />
          </Flex>
        </>
      ) : (
        <Flex height="100vh" justify="center" align="center">
          <Text color="white">Loading.....</Text>
        </Flex>
      )}
    </>
  );
}
