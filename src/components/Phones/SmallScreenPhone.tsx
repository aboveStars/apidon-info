import { titleIDs, titleIdStateAtom } from "@/atoms/titleIdStateAtom";

import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

import { Flex, Image } from "@chakra-ui/react";
import { gsap } from "gsap";

type Props = {
  titleId: titleIDs;
  videoURL: string;
  posterURL: string;
};

export default function SmallScreenPhone({
  titleId,
  videoURL,
  posterURL,
}: Props) {
  const titleIdStateValue = useRecoilValue(titleIdStateAtom);
  const videoRef = useRef<HTMLVideoElement>(null);

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

    if (titleIdStateValue !== titleId) {
      videoRef.current.pause();
    } else {
      handlePlayVideo(videoRef.current);
    }
  }, [titleIdStateValue]);

  const handlePlayVideo = async (videoRefCurrent: HTMLVideoElement) => {
    videoRefCurrent.currentTime = 0;
    try {
      await videoRefCurrent.play();
    } catch (error) {
      // there can be other reasons videos can't be played, but mostly low power mode is causing it.
    }
  };

  const handleScroll = () => {
    if (!ref.current) return;

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
    } else if (ratio <= 0.9223) {
      locationNumeric = 2344.666 * ratio - 2062.485;
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
      hidden={titleId !== titleIdStateValue}
      height="100vh"
      justify="center"
      width="100%"
      position="fixed"
      userSelect="none"
      zIndex={2}
      style={{
        transform: "translateX(100%)",
      }}
    >
      {titleId === "welcome" || titleId === "footer" ? (
        <Image
          objectFit="contain"
          py="1.5"
          src={posterURL}
          fallbackSrc={
            process.env.NEXT_PUBLIC_WELCOME_POSTER_FALLBACK_URL as string
          }
          fallbackStrategy="onError"
          style={{
            height: "100%",
            borderRadius: "3rem",
          }}
          pointerEvents="none"
          userSelect="none"
        />
      ) : (
        <video
          poster={posterURL}
          ref={videoRef}
          muted
          style={{
            height: "100%",
            borderRadius: "3rem",
          }}
          playsInline
        >
          <source src={videoURL} type="video/mp4" />
        </video>
      )}
    </Flex>
  );
}
