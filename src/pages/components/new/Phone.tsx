import { titleNamesStateAtom } from "@/atoms/sectionNumberStateAtom";
import { Img, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
    "2xl": false,
  });

  const [locationOfPhone, setLocationOfPhone] = useState("96%");

  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    if (!isMobile) return;
    const windowHeight = window.innerHeight;
    const totalScrollableHeight =
      document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const ratio = scrolled / totalScrollableHeight;

    let locationNumeric: number = 0;
    if (ratio <= 0.045) {
      locationNumeric = -4266.6 * ratio + 96;
    } else if (ratio > 0.045 && ratio <= 0.1365) {
      locationNumeric = 3801.980198019801 * ratio - 422.9702970297028;
    } else if (ratio > 0.1365 && ratio <= 0.2272) {
      locationNumeric = -4403.6697247706425 * ratio + 904.51376146789;
    } else if (ratio > 0.2272 && ratio <= 0.3185) {
      locationNumeric = 4111.349036402568 * ratio - 1213.464668094218;
    } else if (ratio > 0.3185 && ratio <= 0.409) {
      locationNumeric = -4111.349036402573 * ratio + 1585.5417558886522;
    } else if (ratio > 0.409 && ratio <= 0.5) {
      locationNumeric = 4285.714285714285 * ratio - 2046.8571428571427;
    } else if (ratio > 0.5 && ratio <= 0.59) {
      locationNumeric = -4257.206208425729 * ratio + 2415.75166297118;
    } else if (ratio > 0.59 && ratio <= 0.682) {
      locationNumeric = 4229.074889867842 * ratio - 2788.2290748898686;
    } else if (ratio > 0.682 && ratio <= 0.772) {
      locationNumeric = -4201.312910284457 * ratio + 3147.413566739601;
    } else if (ratio > 0.772 && ratio <= 0.8644) {
      locationNumeric = 4111.349036402573 * ratio - 3457.8501070663838;
    } else if (ratio > 0.8644 && ratio <= 0.9553) {
      locationNumeric = -3975.155279503105 * ratio + 3701.465838509316;
    } else {
      locationNumeric = 96;
    }

    const location = `${locationNumeric}%`;

    if (Math.abs(locationNumeric) <= 96) {
      setLocationOfPhone(location);
      const opacityNumeric =
        -0.010416666666666666 * Math.abs(locationNumeric) + 1;
      setOpacity(opacityNumeric);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {allTitles.map((t, i) => (
        <Img
          key={i}
          position={isMobile ? "fixed" : "absolute"}
          top={isMobile ? "3" : "5"}
          right={isMobile ? "unset" : "5"}
          left={isMobile ? "0" : "unset"}
          src={`/images/${t}.png`}
          alt={t}
          boxSize={isMobile ? "unset" : "3xl"}
          objectFit="contain"
          transform="auto"
          transitionTimingFunction={isMobile ? "linear" : "ease-in-out"}
          transitionProperty="opacity,translate"
          transitionDuration={isMobile ? "100ms, 200ms" : "1s"}
          hidden={isMobile ? titleNameState !== t : false}
          opacity={isMobile ? opacity : titleNameState === t ? 1 : 0}
          translateX={isMobile ? locationOfPhone : "0"}
          zIndex={1}
        />
      ))}
    </>
  );
}
