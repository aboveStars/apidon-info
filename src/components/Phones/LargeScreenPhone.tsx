import { titleNames, titleNamesStateAtom } from "@/atoms/titleNameStateAtom";
import { Flex } from "@chakra-ui/react";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

import { useRecoilValue } from "recoil";

type Props = {
  title: titleNames;
  onCanPlayThrough: () => void;
  videoURL: string;
};

export default function LargeScreenPhone({
  title,
  onCanPlayThrough,
  videoURL,
}: Props) {
  const titleNameState = useRecoilValue(titleNamesStateAtom);

  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
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
        <source src={videoURL} />
      </video>
    </Flex>
  );
}
