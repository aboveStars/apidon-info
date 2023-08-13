import { titleNamesStateAtom } from "@/atoms/sectionNumberStateAtom";
import { Box, Image } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

export default function PhoneMockUp() {
  const [phoneMockUpRef, phoneMockUpInView] = useInView({
    triggerOnce: true,
  });

  const titleNameState = useRecoilValue(titleNamesStateAtom);

  const images = [
    "theNext",
    "unLeash",
    "crafting",
    "rewards",
    "seamless",
    "elevate",
    "become",
    "unlock",
    "elevateYour",
    "seize",
    "craft",
    "your",
    "enter",
    "be",
    "unleashAlgo",
    "elevateWith",
    "fuel",
    "privacy",
    "yourMonetization",
  ];

  return (
    <>
      {images.map((n, i) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          transform="auto"
          translateX={phoneMockUpInView ? "130px" : "-200px"}
          transition="transform 1s ease-in-out"
          position="fixed"
          right="10"
          top="10"
          userSelect="none"
          pointerEvents="none"
          ref={phoneMockUpRef}
          key={i}
        >
          <Image
            src={`/images/${n}.png`}
            alt={n}
            objectFit="contain"
            boxSize="3xl"
            transition="opacity 1s ease-in-out"
            opacity={titleNameState !== n ? 0 : 1}
          />
        </Box>
      ))}
    </>
  );
}
