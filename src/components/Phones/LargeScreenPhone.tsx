import { titleIDs, titleIdStateAtom } from "@/atoms/titleNameStateAtom";
import { Flex } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { useRecoilValue } from "recoil";

type Props = {
  titleId: titleIDs;
  onCanPlayThrough: () => void;
  videoURL: string;
  posterURL: string;
};

export default function LargeScreenPhone({
  titleId,
  onCanPlayThrough,
  videoURL,
  posterURL,
}: Props) {
  const titleIdStateValue = useRecoilValue(titleIdStateAtom);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (titleIdStateValue !== titleId) {
      videoRef.current.pause();
    } else {
      handlePlayVideo(videoRef.current);
    }
  }, [titleIdStateValue]);

  const handlePlayVideo = async (videoRefCurrent: HTMLVideoElement) => {
    try {
      await videoRefCurrent.play();
    } catch (error) {
      // there can be other reasons videos can't be played, but mostly low power mode is causing it.
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
      translateX={titleId === "welcome" && !inView ? "-100%" : 0}
      rotate={titleId === "welcome" && !inView ? "-90deg" : "0deg"}
      scale={titleId === "welcome" && !inView ? "1.1" : "1"}
      opacity={titleIdStateValue === titleId ? 1 : 0}
      userSelect="none"
      pointerEvents={titleId === titleIdStateValue ? "unset" : "none"}
    >
      <video
        poster={posterURL}
        ref={videoRef}
        muted
        style={{
          height: "100%",
        }}
        playsInline
        onCanPlayThrough={onCanPlayThrough}
        loop={!(titleId === "footer" || titleId === "welcome")}
      >
        <source src={videoURL} />
      </video>
    </Flex>
  );
}
