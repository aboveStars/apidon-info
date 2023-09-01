import { backgroundEngineStateAtom } from "@/atoms/backgroundEngineStateAtom";
import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";
import { Box, Center, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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

  const [innerHeight, setInnerHeight] = useState("97vh");

  useEffect(() => {
    setScreenModeState(isMobile ? "mobile" : "large");
  }, [isMobile]);

  useEffect(() => {
    setInnerHeight(`${window.innerHeight}px`);
  }, []);

  return (
    <>
      {bgEngineState.backgroundInitialized ? (
        <>
          {screenModeState === "large" ? (
            <Flex id="lg-screen">
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
          ) : (
            <Flex id="small-screen" direction="column">
              <PhoneSection />
              <WelcomeSection />
              <UserSection />
              <NFTSection />
              <ProviderSection />
              <FooterSection />
            </Flex>
          )}
        </>
      ) : (
        <Center height={innerHeight}>
          <Text color="white" fontSize="5xl" fontWeight="700" zIndex="3">
            APIDON
          </Text>
        </Center>
      )}
    </>
  );
}
