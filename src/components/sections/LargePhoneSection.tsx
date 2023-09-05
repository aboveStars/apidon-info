import { titleNames, titles, videoSources } from "@/atoms/titleNameStateAtom";
import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import LargeScreenPhone from "../Phones/LargeScreenPhone";

export default function LargePhoneSection() {
  const [
    videosCanBePlayedThroughDatabase,
    setVideosCanBePlayedThroughDatabase,
  ] = useState({
    welcome: false,
    vision: false,
    rewards: false,
    rate: false,
    nft: false,
    provider: false,
  });

  const handleVideoCanBePlayedThrough = (title: titleNames) => {
    setVideosCanBePlayedThroughDatabase((a) => ({ ...a, [title]: true }));
  };

  const setVideosAreReady = useSetRecoilState(videosAreReadyStateAtom);

  useEffect(() => {
    const allVideosAreReady = Object.values(
      videosCanBePlayedThroughDatabase
    ).every((a) => a === true);

    setVideosAreReady(allVideosAreReady);
  }, [videosCanBePlayedThroughDatabase]);

  return (
    <>
      {titles.map((t, i) => (
        <LargeScreenPhone
          title={t}
          key={`${t}-${i}-large`}
          onCanPlayThrough={() => handleVideoCanBePlayedThrough(t)}
          videoURL={videoSources[t] as string}
        />
      ))}
    </>
  );
}
