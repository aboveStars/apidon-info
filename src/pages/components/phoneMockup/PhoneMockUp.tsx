import { sectionNumberStateAtom } from "@/atoms/sectionNumberStateAtom";
import { Box, Flex, Image } from "@chakra-ui/react";
import { animated, useSpring, useTransition } from "@react-spring/web";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

export default function PhoneMockUp() {
  const [phoneMockUpRef, phoneMockUpInView] = useInView({
    triggerOnce: true,
  });

  const sectionNumberState = useRecoilValue(sectionNumberStateAtom);

  const photos = ["/1.png", "/2.png"];

  const transitions = useTransition(photos[sectionNumberState - 1], {
    key: sectionNumberState - 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      transform="auto"
      translateX={phoneMockUpInView ? "160px" : "-200px"}
      transition="transform 1s ease-in-out"
      position="fixed"
      right="10"
      top="10"
      userSelect="none"
      ref={phoneMockUpRef}
    >
      {/* {transitions((style, image) => (
        <animated.img
          src={image} // Adjust the path to your images
          alt="Transitioning Image"
          style={{ ...style, width: "100%", height: "auto" }}
        />
      ))} */}
      <Box position="fixed">
        <Image
          src="1.png"
          alt="Description of the image"
          objectFit="contain"
          boxSize="3xl"
          transition="opacity 1s ease-in-out"
          opacity={sectionNumberState !== 1 ? 0 : 1}
         
        />
      </Box>
      <Box position="fixed">
        <Image
          src="2.png"
          alt="Description of the image"
          objectFit="contain"
          boxSize="3xl"
          transition="opacity 1s ease-in-out"
          opacity={sectionNumberState !== 2 ? 0 : 1}
        />
      </Box>

      <Image
        src="2.png"
        alt="Description of the image"
        objectFit="contain"
        boxSize="3xl"
        transition="opacity 1s ease-in-out"
        opacity={sectionNumberState === 2 ? 1 : 0}
      />
    </Box>
  );
}
