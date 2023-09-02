import {
  titleNames,
  titleNamesStateAtom,
  videoSources,
} from "@/atoms/titleNameStateAtom";
import { Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

type Props = {
  title: titleNames;
  onCanPlayThrough: () => void;
};

export default function LargeScreenPhone({ title, onCanPlayThrough }: Props) {
  const titleNameState = useRecoilValue(titleNamesStateAtom);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (titleNameState !== title) {
      videoRef.current.pause();
    } else {
      handlePlayVideo(videoRef.current);
    }
  }, [titleNameState]);

  const handlePlayVideo = async (videoRefCurrent: HTMLVideoElement) => {
    try {
      await videoRefCurrent.play();
    } catch (error) {
      // not important.
    }
  };

  return (
    <Flex
      ref={ref}
      justify="center"
      width="100%"
      height="100%"
      position="absolute"
      p={5}
      transform="auto"
      transition="all 1s ease-in-out"
      translateX={title === "welcome" && !inView ? "-100%" : 0}
      rotate={title === "welcome" && !inView ? "-90deg" : "0deg"}
      scale={title === "welcome" && !inView ? "1.1" : "1"}
      opacity={titleNameState === title ? 1 : 0}
      zIndex={2}
      userSelect="none"
      pointerEvents="none"
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
  );
}
