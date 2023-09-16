import { firstContentReadyStateAtom } from "@/atoms/firstContentReadyStateAtom";
import { titleIDs, titleIdStateAtom } from "@/atoms/titleIdStateAtom";
import { Flex, Image } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

type Props = {
  titleId: titleIDs;
  videoURL: string;
  posterURL: string;
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

  const handleHover = (isEntered: boolean) => {
    if (!videoRef.current) return;
    if (isEntered) return videoRef.current.pause();
    try {
      videoRef.current.play();
    } catch (error) {
      // not important
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
      ) : (
        <video
          onMouseEnter={() => {
            handleHover(true);
          }}
          onMouseLeave={() => {
            handleHover(false);
          }}
          poster={posterURL}
          ref={videoRef}
          muted
          style={{
            height: "100%",
          }}
          playsInline
        >
          <source src={videoURL} />
        </video>
      )}
    </Flex>
  );
}
