import { titleNamesStateAtom } from "@/atoms/sectionNumberStateAtom";
import { Flex, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

type Props = {};

const allTitles = [
  "theNext",
  "unLeash",
  "crafting",
  "rewards",
  "seamless",
  "elevate",
  "elevateYour",
  "craft",
  "enter",
  "be",
  "unleashAlgo",
  "fuel",
];

export default function Phone({}: Props) {
  const titleNameState = useRecoilValue(titleNamesStateAtom);

  const [viewportWidth, setviewportWidth] = useState(0);

  const a = 1000

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setviewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => handleResize());
    return window.removeEventListener("resize", () => handleResize());
  }, []);

  return (
    <>
      {allTitles.map((t, i) => (
        <Img
          key={i}
          position="absolute"
          top={5}
          right={5}
          src={`/images/${t}.png`}
          alt={t}
          boxSize="3xl"
          objectFit="contain"
          transition="all 1s ease-in-out"
          transform="auto"
          rotate={titleNameState === "theNext" ? "45deg" : "0deg"}
          opacity={titleNameState === t ? 1 : 0}
        />
      ))}
    </>
  );
}
