import {
  titleNames,
  titleNamesStateAtom,
  videoSources,
} from "@/atoms/titleNameStateAtom";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { motion, useAnimationControls } from "framer-motion";

type Props = {
  title: titleNames;
};

export default function SmallScreenPhone({ title }: Props) {
  const [opacity, setOpacity] = useState(0);
  const [viewportHeight, setViewportHeight] = useState("0px");
  const titleNameStateValue = useRecoilValue(titleNamesStateAtom);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animatonControls = useAnimationControls();

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (titleNameStateValue !== title) {
      videoRef.current.pause();
    } else {
      handlePlayVideo(videoRef.current);
    }
  }, [titleNameStateValue]);

  useEffect(() => {
    // Add an event listener for visualViewport changes
    window.visualViewport?.addEventListener("resize", handleViewportChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        handleViewportChange
      );
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  const handleViewportChange = () => {
    setViewportHeight(`${window.visualViewport?.height}px`);
  };

  const handlePlayVideo = async (videoRefCurrent: HTMLVideoElement) => {
    try {
      await videoRefCurrent.play();
    } catch (error) {
      // not important.
    }
  };

  const handleScroll = () => {
    handleViewportChange();

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
      locationNumeric = 100;
    }

    const location = `${locationNumeric}%`;
    const opacityNumeric = -0.01 * Math.abs(locationNumeric) + 1;

    setOpacity(opacityNumeric);

    animatonControls.start({
      x: location,
      transition: {
        duration: "50ms",
        damping: 0,
      },
    });
  };

  return (
    <motion.div
      hidden={title !== titleNameStateValue}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: viewportHeight,
        position: "fixed",
        zIndex: 2,
        userSelect: "none",
        opacity: opacity,
      }}
      animate={animatonControls}
      initial={{
        x: "100%",
      }}
    >
      <video
        ref={videoRef}
        muted
        style={{
          height: "100%",
          borderRadius: "3rem",
        }}
        playsInline
        loop={title !== "welcome"}
        autoPlay
      >
        <source src={videoSources[title]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}
