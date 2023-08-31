import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import {
  titleNames,
  titleNamesStateAtom,
  videoSources,
} from "@/atoms/titleNameStateAtom";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

type Props = {
  title: titleNames;
  onCanPlayThrough: () => void;
};

export default function ModularPhone({ title, onCanPlayThrough }: Props) {
  const screenModeStateValue = useRecoilValue(screenModStateAtom);
  const titleNameState = useRecoilValue(titleNamesStateAtom);

  const [locationOfPhone, setLocationOfPhone] = useState("100%");
  const [opacity, setOpacity] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (titleNameState !== title) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [titleNameState]);

  const handleScroll = () => {
    if (screenModeStateValue !== "mobile") return;
    const windowHeight = window.innerHeight;
    const totalScrollableHeight =
      document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const ratio = scrolled / totalScrollableHeight;

    let locationNumeric: number = 0;

    if (ratio <= 0.084) {
      locationNumeric = -2381 * ratio + 100;
    } else if (ratio <= 0.25) {
      locationNumeric = 2410 * ratio - 502;
    } else if (ratio <= 0.417) {
      locationNumeric = -2439 * ratio + 917;
    } else if (ratio <= 0.583) {
      locationNumeric = 2597 * ratio - 1414;
    } else if (ratio <= 0.75) {
      locationNumeric = -2299 * ratio + 1624;
    } else if (ratio <= 0.917) {
      locationNumeric = 2597 * ratio - 2282;
    } else {
      locationNumeric = 101;
    }

    const location = `${locationNumeric}%`;

    const opacityNumeric = -0.01 * Math.abs(locationNumeric) + 1;

    setLocationOfPhone(location);
    setOpacity(opacityNumeric);
  };

  return (
    <>
      <Flex
        display={
          screenModeStateValue === "large"
            ? "flex"
            : title === titleNameState
            ? "flex"
            : "none"
        }
        ref={ref}
        justify="center"
        width="100%"
        height="100%"
        position={screenModeStateValue === "mobile" ? "fixed" : "absolute"}
        p={screenModeStateValue === "mobile" ? "unset" : "5"}
        transform="auto"
        transition={
          screenModeStateValue === "mobile"
            ? "all 150ms linear"
            : "all 1s ease-in-out"
        }
        translateX={
          screenModeStateValue === "mobile"
            ? locationOfPhone
            : title === "welcome" && !inView
            ? "-100%"
            : 0
        }
        rotate={
          screenModeStateValue === "mobile"
            ? "0deg"
            : title === "welcome" && !inView
            ? "-90deg"
            : "0deg"
        }
        scale={
          screenModeStateValue === "mobile"
            ? "1"
            : title === "welcome" && !inView
            ? "1.1"
            : "1"
        }
        opacity={
          screenModeStateValue === "mobile"
            ? opacity
            : titleNameState === title
            ? 1
            : 0
        }
        zIndex={2}
        userSelect="none"
        pointerEvents={screenModeStateValue === "mobile" ? "unset" : "none"}
      >
        <video
          ref={videoRef}
          muted
          style={{
            height: "100%",
          }}
          playsInline
          onCanPlayThrough={onCanPlayThrough}
          loop={title !== "welcome"}
        >
          <source src={videoSources[title]} />
        </video>
      </Flex>
    </>
  );
}
