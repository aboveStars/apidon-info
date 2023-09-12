import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import IstanbulSVGSection from "./IstanbulSVGSection";

export default function FooterSection() {
  const tRef = useRef(null);
  const inView = useInView(tRef);

  const screenModeStateValue = useRecoilValue(screenModStateAtom);

  return (
    <Flex
      width="100%"
      height="100vh"
      gap="5"
      zIndex={1}
      justify="center"
      direction="column"
      px={screenModeStateValue === "mobile" ? "5" : "20"}
      overflow="hidden"
    >
      <Text
        ref={tRef}
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
        transform="auto"
        translateX={inView ? "0" : "100%"}
        transition="all 1s linear"
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
        transform="auto"
        translateX={inView ? "0" : "-100%"}
        transition="all 1s linear"
      >
        Stay connected with our project by following us on GitHub and engaging
        with us on our various social media platforms. Join the conversation and
        be a part of our community!
      </Text>

      <Flex direction="column" align="center" gap="3" transform="auto">
        <IstanbulSVGSection animate={inView} key={`${inView}`} />
        <Text
          opacity={inView ? 1 : 0}
          transition={inView ? "all 3s linear 1s" : "none"}
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
