import { titleNames, titleNamesStateAtom } from "@/atoms/titleNameStateAtom";

import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

import { Flex } from "@chakra-ui/react";
import { gsap } from "gsap";

type Props = {
  title: titleNames;
  videoURL: string;
};

export default function SmallScreenPhone({ title, videoURL }: Props) {
  const titleNameStateValue = useRecoilValue(titleNamesStateAtom);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLowPowerModeActive, setIsLowPowerModeActive] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

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

  const handlePlayVideo = async (videoRefCurrent: HTMLVideoElement) => {
    try {
      await videoRefCurrent.play();
    } catch (error) {
      // there can be other reasons videos can't be played, but mostly low power mode is causing it.
      setIsLowPowerModeActive(true);
    }
  };

  const handleScroll = () => {
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
    } else if (ratio <= 0.8671) {
      locationNumeric = 3220.612 * ratio - 2692.593;
    } else {
      locationNumeric = 100;
    }

    const location = `${locationNumeric}%`;
    const opacityNumeric = -0.01 * Math.abs(locationNumeric) + 1;

    gsap.to(ref.current, {
      x: location,
      opacity: opacityNumeric,
      duration: "0.1",
    });
  };

  return (
    <Flex
      ref={ref}
      hidden={title !== titleNameStateValue}
      height="100vh"
      justify="center"
      width="100%"
      position="fixed"
      userSelect="none"
      zIndex={2}
    >
      <video
        poster={process.env.NEXT_PUBLIC_VIDEO_POSTER_URL}
        ref={videoRef}
        muted
        style={{
          height: "100%",
          borderRadius: "3rem",
        }}
        playsInline
        loop={title !== "welcome"}
        controls={isLowPowerModeActive}
      >
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Flex>
  );
}
