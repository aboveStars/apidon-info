import {
  titleNames,
  titleNamesStateAtom,
} from "@/atoms/sectionNumberStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSetRecoilState } from "recoil";

type Props = {
  title: string;
  description: string;
  titleName: titleNames;
};

export default function GeneralTitle({ title, description, titleName }: Props) {
  const setTitleNameState = useSetRecoilState(titleNamesStateAtom);
  const [generalTitleRef, generalTitleInView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (generalTitleInView) {
      setTitleNameState(titleName);
    }
  }, [generalTitleInView]);

  return (
    <Flex
      id={`generalTitle-section-${titleName}`}
      direction="column"
      justify="center"
      gap="5"
      ml="20"
      height="100vh"
      maxWidth="40rem"
      ref={generalTitleRef}
      transition="transform 1s ease-in-out"
      transform={`scale(${generalTitleInView ? "1" : "0"})`}
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
