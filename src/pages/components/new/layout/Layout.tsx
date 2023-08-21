import { backgroundEngineStateAtom } from "@/atoms/backgroundEngineStateAtom";
import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import NFTSection from "../../sections/NFTSection";
import ProviderSection from "../../sections/ProviderSection";
import UserSection from "../../sections/UserSection";
import Phone from "../Phone";
import Title from "../Title";

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
  const [screenModeState, setScreenModeState] =
    useRecoilState(screenModStateAtom);

  useEffect(() => {
    setScreenModeState(isMobile ? "mobile" : "large");
  }, [isMobile]);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      {bgEngineState.backgroundInitialized ? (
        <>
          <Flex id="lg-screen" hidden={screenModeState === "mobile"}>
            <Box flex="1" zIndex="1">
              <Title
                titleName="theNext"
                title="The Next Generation Social Media"
                description="The magnificent platform enables users to select their algorithms,
        create NFTs that are marketable, and additionally welcomes algorithm
        creators to participate and generate income."
              />
              <UserSection />
              <NFTSection />
              <ProviderSection />
            </Box>
            <Box
              flex="1"
              position="sticky"
              height="100vh"
              top={0}
              right={0}
              zIndex="1"
            >
              <Phone />
            </Box>
          </Flex>

          <Flex
            id="small-screen"
            hidden={screenModeState === "large"}
            direction="column"
            px={5}
            bg="black"
          >
            <Phone />
            <Title
              titleName="theNext"
              title="The Next Generation Social Media"
              description="The magnificent platform enables users to select their algorithms,
        create NFTs that are marketable, and additionally welcomes algorithm
        creators to participate and generate income."
            />
            <UserSection />
            <NFTSection />
            <ProviderSection />
          </Flex>
        </>
      ) : (
        <Flex height="100vh" justify="center" align="center" bg="black">
          <Text color="white">Loading.....</Text>
        </Flex>
      )}
    </>
  );
}
