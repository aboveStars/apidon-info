import { titleNames, videoSources } from "@/atoms/titleNameStateAtom";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  title: titleNames;
};

export default function SmallScreenPhone({ title }: Props) {
  const [locationOfPhone, setLocationOfPhone] = useState("100%");
  const [opacity, setOpacity] = useState(0);

  const [viewportHeight, setViewportHeight] = useState("0px");

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setViewportHeight(`${visualViewport?.height}px`);
    const windowHeight = window.innerHeight;
    const totalScrollableHeight =
      document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const ratio = scrolled / totalScrollableHeight;

    let locationNumeric: number = 0;

    if (ratio <= 0.084) {
      locationNumeric = -2380.9523809523807 * ratio + 100;
    } else if (ratio <= 0.25) {
      locationNumeric = 2409.6385542168678 * ratio - 502.40963855421694;
    } else if (ratio <= 0.417) {
      locationNumeric = -2439.024390243904 * ratio + 917.0731707317078;
    } else if (ratio <= 0.583) {
      locationNumeric = 2597.402597402599 * ratio - 1414.2857142857151;
    } else if (ratio <= 0.75) {
      locationNumeric = -2298.8505747126446 * ratio + 1624.1379310344835;
    } else if (ratio <= 0.917) {
      locationNumeric = 2597.402597402595 * ratio - 2281.8181818181797;
    } else {
      locationNumeric = 101;
    }

    const location = `${locationNumeric}%`;
    const opacityNumeric = -0.01 * Math.abs(locationNumeric) + 1;

    if (Math.abs(locationNumeric) > 100) return;

    setLocationOfPhone(location);
    setOpacity(opacityNumeric);
  };

  return (
    <Flex
      justify="center"
      width="100%"
      height={viewportHeight}
      position="fixed"
      style={{
        transform: `translate(${locationOfPhone})`,
        msTransform: `translate(${locationOfPhone})`,
        WebkitTransform: `translate(${locationOfPhone})`,

        transitionDuration: "200ms,200ms,500ms",
        msTransitionDuration: "200ms,200ms,500ms",
        MozTransitionDuration: "200ms,200ms,500ms",
        WebkitTransitionDuration: "200ms,200ms,500ms",

        transitionProperty: "transform, opacity, height",
        msTransitionProperty: "transform, opacity, height",
        MozTransitionProperty: "transform, opacity, height",
        WebkitTransitionProperty: "transform, opacity, height",

        transitionTimingFunction: "linear",
        msTransitionTimingFunction: "linear",
        MozTransitionTimingFunction: "linear",
        WebkitTransitionTimingFunction: "linear",
      }}
      opacity={opacity}
      zIndex={2}
      userSelect="none"
    >
      <video
        muted
        style={{
          height: "100%",
        }}
        playsInline
        loop={title !== "welcome"}
        autoPlay
      >
        <source src={videoSources[title]} />
      </video>
    </Flex>
  );
}
