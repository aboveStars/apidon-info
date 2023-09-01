import {
  titleNames,
  titleNamesStateAtom,
  titles,
} from "@/atoms/titleNameStateAtom";
import React, { useEffect, useState } from "react";
import ModularPhone from "../ModularPhone";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";
import { screenModStateAtom } from "@/atoms/screenModeStateAtom";

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

  const screenModStateValue = useRecoilValue(screenModStateAtom);

  const titleStateValue = useRecoilValue(titleNamesStateAtom);

  useEffect(() => {
    const allVideosAreReady = Object.values(
      videosCanBePlayedThroughDatabase
    ).every((a) => a === true);

    if (allVideosAreReady) setVideosAreReady(allVideosAreReady);
  }, [videosCanBePlayedThroughDatabase]);

  return (
    <>
      {screenModStateValue === "large" ? (
        <>
          {titles.map((t, i) => (
            <ModularPhone
              title={t}
              key={i}
              onCanPlayThrough={() => handleVideoCanBePlayedThrough(t)}
            />
          ))}
        </>
      ) : (
        <ModularPhone
          title={titleStateValue}
          onCanPlayThrough={() =>
            handleVideoCanBePlayedThrough(titleStateValue)
          }
          key={titleStateValue}
        />
      )}
    </>
  );
}
