import { titleNamesStateAtom } from "@/atoms/sectionNumberStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSetRecoilState } from "recoil";

export default function WelcomeSection() {
  const [generalTitleRef, generalTitleInView] = useInView({
    triggerOnce: false,
  });
  const setTitleNameState = useSetRecoilState(titleNamesStateAtom);
  useEffect(() => {
    if (generalTitleInView) {
      setTitleNameState("theNext");
    }
  }, [generalTitleInView]);

  return (
    <>
      <Flex direction="column" justify="center" align="center" height="100vh" gap="5">
        <Text
          fontWeight="extrabold"
          lineHeight="normal"
          fontSize="7xl"
          bgGradient="linear(to-l, #e4e4d9, #215f00)"
          bgClip="text"
          id="main-title"
          textAlign="center"
          _selection={{
            backgroundColor: "green",
            color: "white",
          }}
          ref={generalTitleRef}
        >
          The Next Generation Social Media
        </Text>
        <Text
          color="gray.500"
          fontSize="1xl"
          id="description"
          textAlign="center"
          maxWidth="55rem"
          lineHeight="normal"
          _selection={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          The magnificent platform enables users to select their algorithms,
          create NFTs that are marketable, and additionally welcomes algorithm
          creators to participate and generate income.
        </Text>
      </Flex>
    </>
  );
}
