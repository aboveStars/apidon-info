import {
  sectionNumberStateAtom,
  sectionNumbers,
} from "@/atoms/sectionNumberStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSetRecoilState } from "recoil";

type Props = {
  title: string;
  description: string;
  sectionNumber: sectionNumbers;
};

export default function GeneralTitle({
  title,
  description,
  sectionNumber,
}: Props) {
  const setSectionNumberState = useSetRecoilState(sectionNumberStateAtom);
  const [generalTitleRef, generalTitleInView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (generalTitleInView) setSectionNumberState(sectionNumber);
  }, [generalTitleInView]);

  return (
    <Flex
      id="title-des"
      direction="column"
      justify="center"
      maxWidth="40rem"
      gap="5"
      transition="transform 1s ease-in-out"
      transform={`scale(${generalTitleInView ? "1" : "0"})`}
      ref={generalTitleRef}
      ml="20"
      height="100vh"
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
      >
        {title}
      </Text>

      <Text
        color="gray.500"
        fontSize="1xl"
        id="description"
        textAlign="left"
        maxWidth="55rem"
        lineHeight="normal"
        _selection={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        {description}
      </Text>
    </Flex>
  );
}
