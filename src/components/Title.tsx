import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import {
  titleNames,
  titleNamesStateAtom,
} from "@/atoms/sectionNumberStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue, useSetRecoilState } from "recoil";

type Props = {
  title: string;
  description: string;
  titleName: titleNames;
};

export default function Title({ title, description, titleName }: Props) {
  const setTitleNameState = useSetRecoilState(titleNamesStateAtom);
  const [ref, inView] = useInView();

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
      transition="1s transform ease-in-out"
      px={screenModeStateValue === "mobile" ? "unset" : "20"}
      zIndex={1}
    >
      <Text
        fontWeight="extrabold"
        lineHeight="normal"
        fontSize={screenModeStateValue === "mobile" ? "5xl" : "7xl"}
        bgGradient="linear(to-l, #e4e4d9, #215f00)"
        bgClip="text"
        id="main-title"
        textAlign="left"
        _selection={{
          backgroundColor: "green",
          color: "white",
        }}
        ref={ref}
        maxWidth={screenModeStateValue === "mobile" ? "unset" : "45rem"}
      >
        {title}
      </Text>

      <Text
        color="gray.500"
        fontSize={screenModeStateValue === "mobile" ? "sm" : "lg"}
        id="description"
        textAlign="left"
        lineHeight="normal"
        _selection={{
          backgroundColor: "white",
          color: "black",
        }}
        maxWidth={screenModeStateValue === "mobile" ? "unset" : "40rem"}
      >
        {description}
      </Text>
    </Flex>
  );
}
