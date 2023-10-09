import { firstContentReadyStateAtom } from "@/atoms/firstContentReadyStateAtom";
import { titleIDs, titleIdStateAtom } from "@/atoms/titleIdStateAtom";
import { Flex, Icon, Image } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { FiPause } from "react-icons/fi";

type Props = {
  titleId: titleIDs;
  videoURL?: string;
  posterURL?: string;
};

export default function LargeScreenPhone({
  titleId,
  videoURL,
  posterURL,
}: Props) {
  const titleIdStateValue = useRecoilValue(titleIdStateAtom);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  const setFirstContentReadyState = useSetRecoilState(
    firstContentReadyStateAtom
  );

  const [hovered, setHovered] = useState(false);

  const [videoLoadError, setVideoLoadError] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (titleIdStateValue !== titleId) {
      videoRef.current.pause();
    } else {
      handlePlayVideo(videoRef.current);
    }
  }, [titleIdStateValue]);

  const handlePlayVideo = async (videoRefCurrent: HTMLVideoElement) => {
    if (hovered) return;
    videoRefCurrent.currentTime = 0;
    try {
      await videoRefCurrent.play();
    } catch (error) {
      setVideoLoadError(true);
      // there can be other reasons videos can't be played, but mostly low power mode is causing it.
    }
  };

  const handleHover = async (isEntered: boolean) => {
    if (!videoRef.current) return;
    if (titleId !== titleIdStateValue) return;

    setHovered(isEntered);
    if (isEntered) return videoRef.current.pause();
    try {
      await videoRef.current.play();
    } catch (error) {
      setVideoLoadError(true);
      // not important
    }
  };

  return (
    <Flex
      ref={ref}
      width="100%"
      height="100%"
      position="absolute"
      justify="center"
      p={5}
      transform="auto"
      transition="all 1s ease-in-out"
      translateX={titleId === "welcome" && !inView ? "-100%" : 0}
      rotate={titleId === "welcome" && !inView ? "-90deg" : "0deg"}
      scale={titleId === "welcome" && !inView ? "1.1" : "1"}
      opacity={titleIdStateValue === titleId ? 1 : 0}
      userSelect="none"
      pointerEvents={titleId === titleIdStateValue ? "unset" : "none"}
    >
      {titleId === "welcome" || titleId === "footer" ? (
        <Image
          py="1.5"
          src={posterURL}
          objectFit="contain"
          fallbackSrc={
            process.env.NEXT_PUBLIC_WELCOME_POSTER_FALLBACK_URL as string
          }
          fallbackStrategy="onError"
          style={{
            height: "100%",
          }}
          onLoad={() => {
            if (titleId === "welcome") setFirstContentReadyState(true);
          }}
          onError={() => {
            if (titleId === "welcome") setFirstContentReadyState(true);
          }}
          pointerEvents="none"
          userSelect="none"
        />
      ) : videoLoadError ? (
        <>
          <Image
            py="1.5"
            src={posterURL}
            objectFit="contain"
            style={{
              height: "100%",
            }}
            pointerEvents="none"
            userSelect="none"
          />
        </>
      ) : (
        <>
          <video
            poster={posterURL}
            onMouseEnter={() => {
              handleHover(true);
            }}
            onMouseLeave={() => {
              handleHover(false);
            }}
            ref={videoRef}
            muted
            style={{
              height: "100%",
            }}
            loop
            playsInline
          >
            <source src={videoURL} />
          </video>
          <Flex
            height="100%"
            width="100%"
            position="absolute"
            align="center"
            justify="center"
            pointerEvents="none"
            opacity={hovered ? 1 : 0}
            transition="opacity 0.2s ease-in-out"
          >
            <Icon as={FiPause} fontSize="9xl" color="white" />
          </Flex>
        </>
      )}
    </Flex>
  );
}
