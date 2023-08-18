import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import NFTSection from "../../sections/NFTSection";
import ProviderSection from "../../sections/ProviderSection";
import UserSection from "../../sections/UserSection";
import Phone from "../Phone";
import Title from "../Title";
import { useRecoilValue } from "recoil";
import { backgroundEngineStateAtom } from "@/atoms/backgroundEngineStateAtom";
import { useEffect } from "react";

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

  return (
    <>
      {bgEngineState.backgroundInitialized ? (
        <>
          <Flex id="lg-screen" hidden={isMobile}>
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
            hidden={!isMobile}
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
