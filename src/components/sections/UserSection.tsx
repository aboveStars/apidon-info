import { Box, Flex } from "@chakra-ui/react";
import Title from "../Title";
import { useRecoilValue } from "recoil";
import { screenModStateAtom } from "@/atoms/screenModeStateAtom";

export default function UserSection() {

  const screenModeValue = useRecoilValue(screenModStateAtom)

  return (
    <Flex direction="column">
      <Title
        title="Unleash Your Vision"
        description="Choose from diverse algorithm creators who craft tailored experiences, shaping your feed to amplify what matters to you."
        titleId="vision"
      />
      {screenModeValue === "mobile" &&  <Box height="100vh" width="100%" zIndex={1} /> }
     

      <Title
        title="Unique Engagement Rewards"
        description="Your data is precious. We value your actions and insights that shape your digital world. Get monthly crypto rewards for your contributions."
        titleId="rewards"
      />
       {screenModeValue === "mobile" &&  <Box height="100vh" width="100%" zIndex={1} /> }
      <Title
        title="Your Voice Matters"
        description="Rate providers and make your voice heard to contribute towards improving the platform for everyone."
        titleId="rate"
      />
       {screenModeValue === "mobile" &&  <Box height="100vh" width="100%" zIndex={1} /> }
    </Flex>
  );
}
