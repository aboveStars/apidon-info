import {
  titleNames,
  titleNamesStateAtom,
} from "@/atoms/sectionNumberStateAtom";
import { Flex, Text } from "@chakra-ui/react";

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
      align="center"
      px={5}
    >
      <Text
        fontWeight="extrabold"
        lineHeight="normal"
        fontSize="7xl"
        bgGradient="linear(to-l, #e4e4d9, #215f00)"
        bgClip="text"
        id="main-title"
        textAlign="left"
        _selection={{
          backgroundColor: "green",
          color: "white",
        }}
        ref={ref}
        maxWidth="40rem"
      >
        {title}
      </Text>

      <Text
        color="gray.500"
        fontSize="1xl"
        id="description"
        textAlign="left"
        lineHeight="normal"
        _selection={{
          backgroundColor: "white",
          color: "black",
        }}
        maxWidth="40rem"
      >
        {description}
      </Text>
    </Flex>
  );
}
