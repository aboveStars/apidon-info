import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { titleNamesStateAtom } from "@/atoms/sectionNumberStateAtom";
import { Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

const allTitles = [
  "theNext",
  "unLeash",
  "unique",
  "effortless",
  "your",
  "enter",
  "unleashAlgo",
];

export default function Phone() {
  const titleNameState = useRecoilValue(titleNamesStateAtom);

  const screenModeStateValue = useRecoilValue(screenModStateAtom);

  const [locationOfPhone, setLocationOfPhone] = useState("96%");

  const [opacity, setOpacity] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleScroll = () => {
    if (screenModeStateValue !== "mobile") return;
    const windowHeight = window.innerHeight;
    const totalScrollableHeight =
      document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const ratio = scrolled / totalScrollableHeight;

    console.log(ratio);

    let locationNumeric: number = 0;
    // if (ratio <= 0.045) {
    //   locationNumeric = -4266.6 * ratio + 96;
    // } else if (ratio > 0.045 && ratio <= 0.1365) {
    //   locationNumeric = 3801.980198019801 * ratio - 422.9702970297028;
    // } else if (ratio > 0.1365 && ratio <= 0.2272) {
    //   locationNumeric = -4403.6697247706425 * ratio + 904.51376146789;
    // } else if (ratio > 0.2272 && ratio <= 0.3185) {
    //   locationNumeric = 4111.349036402568 * ratio - 1213.464668094218;
    // } else if (ratio > 0.3185 && ratio <= 0.409) {
    //   locationNumeric = -4111.349036402573 * ratio + 1585.5417558886522;
    // } else if (ratio > 0.409 && ratio <= 0.5) {
    //   locationNumeric = 4285.714285714285 * ratio - 2046.8571428571427;
    // } else if (ratio > 0.5 && ratio <= 0.59) {
    //   locationNumeric = -4257.206208425729 * ratio + 2415.75166297118;
    // } else if (ratio > 0.59 && ratio <= 0.682) {
    //   locationNumeric = 4229.074889867842 * ratio - 2788.2290748898686;
    // } else if (ratio > 0.682 && ratio <= 0.772) {
    //   locationNumeric = -4201.312910284457 * ratio + 3147.413566739601;
    // } else if (ratio > 0.772 && ratio <= 0.8644) {
    //   locationNumeric = 4111.349036402573 * ratio - 3457.8501070663838;
    // } else if (ratio > 0.8644 && ratio <= 0.9553) {
    //   locationNumeric = -3975.155279503105 * ratio + 3701.465838509316;
    // }

    if (ratio <= 0.05) {
      locationNumeric = -4000 * ratio + 100;
    } else if (ratio <= 0.15) {
      locationNumeric = 4000.000000000001 * ratio - 500.0000000000001;
    } else if (ratio <= 0.25) {
      locationNumeric = -4000.000000000001 * ratio + 900.0000000000002;
    } else if (ratio <= 0.35) {
      locationNumeric = 4000.000000000001 * ratio - 1300.0000000000002;
    } else if (ratio <= 0.45) {
      locationNumeric = -4000.000000000001 * ratio + 1700.0000000000005;
    } else if (ratio <= 0.55) {
      locationNumeric = 3999.9999999999964 * ratio - 2099.999999999998;
    } else if (ratio <= 0.6875) {
      locationNumeric = -3252.032520325203 * ratio + 2135.7723577235774;
    } else {
      locationNumeric = 100;
    }

    const location = `${locationNumeric}%`;

    setLocationOfPhone(location);
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
          ref={ref}
          key={i}
          position={screenModeStateValue === "mobile" ? "fixed" : "absolute"}
          top={screenModeStateValue === "mobile" ? "3" : "5"}
          right={screenModeStateValue === "mobile" ? "unset" : "5"}
          left={screenModeStateValue === "mobile" ? "0" : "unset"}
          src={`/images/${t}.png`}
          alt={t}
          boxSize={screenModeStateValue === "mobile" ? "unset" : "3xl"}
          objectFit="contain"
          transform="auto"
          transition={
            screenModeStateValue === "mobile"
              ? "all 100ms linear"
              : "all 1s ease-in-out"
          }
          hidden={
            screenModeStateValue === "mobile" ? titleNameState !== t : false
          }
          opacity={
            screenModeStateValue === "mobile" ? 1 : titleNameState === t ? 1 : 0
          }
          translateX={
            screenModeStateValue === "mobile"
              ? locationOfPhone
              : inView
              ? "0"
              : "-100%"
          }
          rotate={
            screenModeStateValue === "mobile"
              ? "0deg"
              : inView
              ? "0deg"
              : "-90deg"
          }
          scale={screenModeStateValue === "mobile" ? "1" : inView ? "1" : "1.1"}
          zIndex={2}
          pointerEvents="none"
          userSelect="none"
        />
      ))}
    </>
  );
}
