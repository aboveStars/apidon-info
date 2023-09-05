import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { titleNames, titleNamesStateAtom } from "@/atoms/titleNameStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";

type Props = {
  title: string;
  description: string;
  titleName: titleNames;
};

export default function Title({ title, description, titleName }: Props) {
  const setTitleNameState = useSetRecoilState(titleNamesStateAtom);

  const ref = useRef(null);
  const inView = useInView(ref);

  const screenModeStateValue = useRecoilValue(screenModStateAtom);

  useEffect(() => {
    if (inView) {
      setTitleNameState(titleName);
    }
  }, [inView]);

  return (
    <Flex
      direction="column"
      height="100vh"
      justify="center"
      gap="5"
      transform="auto"
      scale={inView ? 1 : 0}
      transitionDuration="1s"
      transitionTimingFunction="linear"
      transitionProperty="transform"
      px={screenModeStateValue === "mobile" ? "5" : "20"}
      zIndex={1}
    >
      <Text
        fontWeight="extrabold"
        lineHeight="normal"
        fontSize={screenModeStateValue === "mobile" ? "5xl" : "7xl"}
        bgGradient="linear(to-l, #0061ff, #60efff)"
        bgClip="text"
        id="main-title"
        textAlign="left"
        _selection={{
          backgroundColor: "#19A6C8",
          color: "white",
        }}
        ref={ref}
        maxWidth={screenModeStateValue === "mobile" ? "unset" : "45rem"}
      >
        {title}
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
        {description}
      </Text>
    </Flex>
  );
}
