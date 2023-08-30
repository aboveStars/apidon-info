import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import {
  titleNamesStateAtom,
  titles,
  videoSources,
} from "@/atoms/titleNameStateAtom";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

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

    // console.log(ratio);

    let locationNumeric: number = 0;

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
      {titles.map((t, i) => (
        <Flex
          justify="center"
          width="100%"
          height="100%"
          position={screenModeStateValue === "mobile" ? "fixed" : "absolute"}
          p={screenModeStateValue === "mobile" ? "unset" : "5"}
          ref={ref}
          transform="auto"
          transition={
            screenModeStateValue === "mobile"
              ? "all 150ms linear"
              : "all 1s ease-in-out"
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
          key={i}
          hidden={
            screenModeStateValue === "mobile" ? titleNameState !== t : false
          }
          opacity={
            screenModeStateValue === "mobile" ? 1 : titleNameState === t ? 1 : 0
          }
        >
          <video
            autoPlay
            muted
            style={{
              height: "100%",
            }}
            playsInline
            loop={t !== "welcome"}
          >
            <source src={videoSources[t]} />
          </video>
        </Flex>
      ))}
    </>
  );
}
