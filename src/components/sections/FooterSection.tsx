import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

export default function FooterSection() {
  const [ref, inView] = useInView();
  const screenModeStateValue = useRecoilValue(screenModStateAtom);

  return (
    <Flex
      direction="column"
      height="100vh"
      justify="center"
      gap="5"
      transform="auto"
      scale={inView ? 1 : 0}
      transition="1s transform ease-in-out"
      px={screenModeStateValue === "mobile" ? "unset" : "20"}
      zIndex={1}
    >
      <Text
        fontWeight="extrabold"
        lineHeight="normal"
        fontSize={screenModeStateValue === "mobile" ? "5xl" : "7xl"}
        bgGradient="linear(to-l, #ff930f, #fff95b)"
        bgClip="text"
        id="main-title"
        textAlign="center"
        _selection={{
          backgroundColor: "green",
          color: "white",
        }}
        ref={ref}
        maxWidth={screenModeStateValue === "mobile" ? "unset" : "45rem"}
      >
        Made with ❤️ in İstanbul
      </Text>

      <Flex justify="center">
        <Text
          color="gray.500"
          fontSize={screenModeStateValue === "mobile" ? "sm" : "lg"}
          id="description"
          textAlign="center"
          lineHeight="normal"
          _selection={{
            backgroundColor: "white",
            color: "black",
          }}
          maxWidth={screenModeStateValue === "mobile" ? "unset" : "40rem"}
          cursor="pointer"
          onClick={() => {
            window.open("https://github.com", "_blank", "noopener,noreferrer");
          }}
        >
          GitHub Link ↗️
        </Text>
      </Flex>
    </Flex>
  );
}
