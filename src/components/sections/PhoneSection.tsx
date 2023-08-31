import { titleNames, titles } from "@/atoms/titleNameStateAtom";
import React, { useEffect, useState } from "react";
import ModularPhone from "../ModularPhone";
import { useSetRecoilState } from "recoil";
import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";

export default function PhoneSection() {
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

    if (allVideosAreReady) setVideosAreReady(allVideosAreReady);
    
  }, [videosCanBePlayedThroughDatabase]);

  return (
    <>
      {titles.map((t, i) => (
        <ModularPhone
          title={t}
          key={i}
          onCanPlayThrough={() => handleVideoCanBePlayedThrough(t)}
        />
      ))}
    </>
  );
}
