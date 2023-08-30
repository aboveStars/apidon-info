import { Flex } from "@chakra-ui/react";
import Title from "../Title";

export default function UserSection() {
  return (
    <Flex direction="column">
      <Title
        title="Unleash Your Vision"
        description="Choose from diverse algorithm creators who craft tailored experiences, shaping your feed to amplify what matters to you."
        titleName="unLeash"
      />
     
      <Title
        title="Unique Engagement Rewards"
        description="Your data is precious. We value your actions and insights that shape your digital world. Get monthly crypto rewards for your contributions."
        titleName="unique"
      />
      <Title
        title="Your Voice Matters"
        description="Rate providers and make your voice heard to contribute towards improving the platform for everyone."
        titleName="your"
      />
    </Flex>
  );
}
