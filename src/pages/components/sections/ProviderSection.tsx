import { Flex } from "@chakra-ui/react";
import Title from "../new/Title";

export default function ProviderSection() {
  return (
    <Flex direction="column">
      <Title
        title="Be a Provider"
        description="Are you a visionary data analyst, a code virtuoso, or a creative
        algorithm architect? Your expertise can now take center stage within
        our groundbreaking ecosystem. By joining us as a Provider, you're not
        just offering your skills – you're sculpting the future of
        personalized experiences."
        titleName="be"
      />
      <Title
        title="Unleash Algorithmic Ingenuity"
        description="Becoming a Provider is your chance to shine. Harness your algorithmic brilliance and immerse users in tailored feeds that capture their imagination. Your code is your artistry, defining how our users' world unfolds. Our platform, your canvas."
        titleName="unleashAlgo"
      />

      <Title
        title="Fuel Your Offering"
        description="Forge your commitment with a defined monthly offering. This offering symbolizes more than just compensation; it's an investment in the extraordinary experiences you craft. As users choose your algorithm, they're choosing the embodiment of your dedication."
        titleName="fuel"
      />
    </Flex>
  );
}
