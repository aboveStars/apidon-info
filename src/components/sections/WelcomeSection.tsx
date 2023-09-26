import React from "react";
import Title from "../Title";
import { Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { screenModStateAtom } from "@/atoms/screenModeStateAtom";

export default function WelcomeSection() {
  const screenModeValue = useRecoilValue(screenModStateAtom);

  return (
    <>
      <Title
        titleId="welcome"
        title="The Next Generation Social Media"
        description="The magnificent platform enables users to select their algorithms,
        create NFTs that are marketable, and additionally welcomes algorithm
        creators to participate and generate income."
      />
      {screenModeValue === "mobile" && (
        <Box height="100vh" width="100%" zIndex={1} />
      )}
    </>
  );
}
