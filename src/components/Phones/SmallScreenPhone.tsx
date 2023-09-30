import { titleIDs, titles } from "@/atoms/titleIdStateAtom";
import { Flex, Icon, Image } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { FiPause } from "react-icons/fi";

type Props = {
  titleId: titleIDs;
  videoURL?: string;
  posterURL?: string;
};

export default function SmallScreenPhone({
  titleId,
  videoURL,
  posterURL,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const ref = useRef<HTMLDivElement>(null);

  const [clicked, setClicked] = useState(false);

  const [n, setN] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6>(0);

  const { scrollYProgress } = useScroll();

  const [videoLoadError, setVideoLoadError] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (ratio) => {
    if (!ref.current) return;

    let locationNumeric: number = 0;

    let processNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    if (ratio <= 0.125) {
      processNumber = 0;
      setN(processNumber);
    } else if (ratio <= 0.2916) {
      processNumber = 1;
      setN(processNumber);
    } else if (ratio <= 0.4583) {
      processNumber = 2;
      setN(processNumber);
    } else if (ratio <= 0.625) {
      processNumber = 3;
      setN(processNumber);
    } else if (ratio <= 0.7916) {
      processNumber = 4;
      setN(processNumber);
    } else if (ratio <= 0.9583) {
      processNumber = 5;
      setN(processNumber);
    } else {
      processNumber = 6;
      setN(processNumber);
    }

    if (titles[processNumber] !== titleId) return;

    if (ratio <= 0.125) {
      locationNumeric = -1600 * ratio + 100;
    } else if (ratio <= 0.2916) {
      locationNumeric = 1602.5641025641023 * ratio - 367.30769230769226;
    } else if (ratio <= 0.4583) {
      locationNumeric = -1596.1691939345576 * ratio + 631.5243415802078;
    } else if (ratio <= 0.625) {
      locationNumeric = 1600 * ratio - 900;
    } else if (ratio <= 0.7916) {
      locationNumeric = -1600 * ratio + 1166.56;
    } else if (ratio <= 0.9583) {
      locationNumeric = 1600 * ratio - 1433.28;
    } else {
      locationNumeric = 100;
    }

    const location = `${locationNumeric}%`;

    gsap.to(ref.current, {
      x: location,
      duration: "0.1",
    });
  });

  useEffect(() => {
    if (!videoRef.current) return;

    if (titles[n] !== titleId) {
      videoRef.current.pause();
    } else {
      handlePlayVideo(videoRef.current);
    }
  }, [n]);

  const handlePlayVideo = async (videoRefCurrent: HTMLVideoElement) => {
    if (clicked) return;
    videoRefCurrent.currentTime = 0;
    try {
      await videoRefCurrent.play();
    } catch (error) {
      setVideoLoadError(true);
    }
  };

  const handleClick = async () => {
    if (!videoRef.current) return;
    setClicked((a) => !a);
    const newClickState = !clicked;
    if (newClickState) return videoRef.current.pause();
    try {
      await videoRef.current.play();
    } catch (error) {
      setVideoLoadError(true);
    }
  };

  return (
    <Flex
      ref={ref}
      hidden={titleId !== titles[n]}
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
      ) : videoLoadError ? (
        <>
          <Image
            objectFit="contain"
            py="1.5"
            src={posterURL}
            style={{
              height: "100%",
              borderRadius: "3rem",
            }}
            pointerEvents="none"
            userSelect="none"
          />
        </>
      ) : (
        <>
          <video
            onClick={handleClick}
            ref={videoRef}
            muted
            style={{
              height: "100%",
              borderRadius: "3rem",
            }}
            playsInline
            loop
          >
            <source src={videoURL} type="video/mp4" />
          </video>
          <Flex
            height="100%"
            width="100%"
            position="absolute"
            align="center"
            justify="center"
            pointerEvents="none"
            opacity={clicked ? 1 : 0}
            transition="opacity 0.5s ease-in-out"
          >
            <Icon as={FiPause} fontSize="8xl" color="white" />
          </Flex>
        </>
      )}
    </Flex>
  );
}
