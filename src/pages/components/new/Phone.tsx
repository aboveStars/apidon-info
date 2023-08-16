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
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  const [scrollRatio, setScrollRatio] = useState(0);
  const [locationOfPhone, setLocationOfPhone] = useState("-100%");

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const totalScrollableHeight =
      document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const ratio = scrolled / totalScrollableHeight;

    /** SomeInformations
     * 1-) 0 => -100, 0.045 => +100
     * 2-) 0.09 => +100, 0.136.5 => -100
     * 3-)
     */

    /** EQs
     * 1-) y = 4444.44x - 100
     * 2-) y = -2185.79x + 198.36
     */
    let locationNumeric;
    if (ratio <= 0.045) {
      locationNumeric = 4444.44 * ratio - 100;
    } else if (ratio >= 0.045) {
      locationNumeric = -3960.4 * ratio + 440.59;
    }

    const location = `${locationNumeric}%`;

    setLocationOfPhone(location);

    console.log("Ratio: ", ratio, "Location: ", location);
    setScrollRatio(ratio);
  };

  useEffect(() => {
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
          transition={{
            opacity: "1s ease-in-out",
            translateX: "0.1s ease",
          }}
          transform="auto"
          opacity={titleNameState === t ? 1 : 0}
          //translateX={`-${-100 + (6666 * scrollRatio)}%`}
          translateX={isMobile ? locationOfPhone : "0"}
          zIndex={1}
        />
      ))}
    </>
  );
}
