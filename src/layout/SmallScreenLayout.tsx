import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";
import FooterSection from "@/components/sections/FooterSection";
import NFTSection from "@/components/sections/NFTSection";
import ProviderSection from "@/components/sections/ProviderSection";
import SmallPhoneSection from "@/components/sections/SmallPhoneSection";
import UserSection from "@/components/sections/UserSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

export default function SmallScreenLayout() {
  const videosAreReady = useRecoilValue(videosAreReadyStateAtom);

  return (
    <Flex id="small-screen" direction="column">
      {!videosAreReady && (
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

      <Box display="flex" flexDirection="column" hidden={!videosAreReady}>
        <Image
          src="/bgForMobile.png"
          height="100vh"
          width="100%"
          position="fixed"
          objectFit="fill"
        />

        <WelcomeSection />
        <UserSection />
        <NFTSection />
        <ProviderSection />
        <FooterSection />
        <SmallPhoneSection />
      </Box>
    </Flex>
  );
}
