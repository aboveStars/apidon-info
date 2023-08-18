import {
  titleNames,
  titleNamesStateAtom,
} from "@/atoms/sectionNumberStateAtom";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSetRecoilState } from "recoil";

type Props = {
  title: string;
  description: string;
  titleName: titleNames;
};

export default function Title({ title, description, titleName }: Props) {
  const setTitleNameState = useSetRecoilState(titleNamesStateAtom);
  const [ref, inView] = useInView();

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
    "2xl": false,
  });

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
      px={isMobile ? "unset" : "20"}
      zIndex={1}
    >
      <Text
        fontWeight="extrabold"
        lineHeight="normal"
        fontSize={isMobile ? "5xl" : "7xl"}
        bgGradient="linear(to-l, #e4e4d9, #215f00)"
        bgClip="text"
        id="main-title"
        textAlign="left"
        _selection={{
          backgroundColor: "green",
          color: "white",
        }}
        ref={ref}
        maxWidth={isMobile ? "unset" : "45rem"}
      >
        {title}
      </Text>

      <Text
        color="gray.500"
        fontSize={isMobile ? "sm" : "lg"}
        id="description"
        textAlign="left"
        lineHeight="normal"
        _selection={{
          backgroundColor: "white",
          color: "black",
        }}
        maxWidth={isMobile ? "unset" : "40rem"}
      >
        {description}
      </Text>
    </Flex>
  );
}
