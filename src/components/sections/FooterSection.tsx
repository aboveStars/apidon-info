import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { titleIdStateAtom } from "@/atoms/titleNameStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import IstanbulSVGSection from "../IstanbulSVGSection";
import SocialButton from "../SocialButton";

export default function FooterSection() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const screenModeStateValue = useRecoilValue(screenModStateAtom);
  const setTitleIdState = useSetRecoilState(titleIdStateAtom);

  useEffect(() => {
    if (inView) {
      setTitleIdState("footer");
    }
  }, [inView]);

  return (
    <Flex
      width="100%"
      height="100vh"
      zIndex={1}
      justify="center"
      direction="column"
      px={screenModeStateValue === "mobile" ? "5" : "20"}
      overflow="hidden"
      gap="10"
    >
      <Flex
        direction="column"
        gap="5"
        transform="auto"
        scale={inView ? 1 : 0}
        transitionDuration="1s"
        transitionTimingFunction="linear"
        transitionProperty="transform"
      >
        <Text
          fontWeight="extrabold"
          lineHeight="normal"
          fontSize={screenModeStateValue === "mobile" ? "5xl" : "7xl"}
          bgGradient="linear(to-l, #ff930f, #fff95b)"
          bgClip="text"
          id="main-title"
          textAlign="left"
          _selection={{
            backgroundColor: "green",
            color: "white",
          }}
          maxWidth={screenModeStateValue === "mobile" ? "unset" : "45rem"}
        >
          Follow Our Journey
        </Text>
        <Text
          as="b"
          color="#a1a1a6"
          fontSize={screenModeStateValue === "mobile" ? "sm" : "lg"}
          id="description"
          textAlign="left"
          lineHeight="normal"
          _selection={{
            backgroundColor: "white",
            color: "black",
          }}
          maxWidth={screenModeStateValue === "mobile" ? "unset" : "40rem"}
          bg="black"
        >
          Stay connected and engage with us on our various social media
          platforms. Join the conversation and be a part of our community!
        </Text>
      </Flex>

      <Flex
        ref={ref}
        id="social"
        width="100%"
        zIndex={1}
        justify="space-between"
        px={screenModeStateValue === "large" ? 2 : "unset"}
        transform="auto"
        scale={inView ? 1 : 0}
        transitionDuration="1s"
        transitionTimingFunction="linear"
        transitionProperty="transform"
      >
        <SocialButton
          isMobile={screenModeStateValue === "mobile"}
          buttonName="GitHub"
          iconURL="/images/social/github.png"
          socialMediaLink="https://github.com/aboveStars/blocksocial-v2-frontend"
        />

        <SocialButton
          isMobile={screenModeStateValue === "mobile"}
          buttonName="X"
          iconURL="/images/social/x.png"
          socialMediaLink="https://twitter.com/apidon_com"
        />
        <SocialButton
          isMobile={screenModeStateValue === "mobile"}
          buttonName="Instagram"
          iconURL="/images/social/ig.png"
          socialMediaLink="https://www.instagram.com/apidon_com/"
        />
      </Flex>

      <Flex direction="column" align="center" gap="3" zIndex={1}>
        <IstanbulSVGSection
          animate={inView}
          key={`${inView}`}
          isMobile={screenModeStateValue === "mobile"}
        />
        <Text
          opacity={inView ? 1 : 0}
          transform="auto"
          scale={inView ? 1 : 0}
          transitionDuration={inView ? "4.5s" : "0s"}
          transitionTimingFunction="linear"
          transitionProperty="transform,opacity"
          fontWeight="700"
          fontSize="xs"
          color="white"
        >
          Made with ❤️ in Istanbul
        </Text>
      </Flex>
    </Flex>
  );
}
