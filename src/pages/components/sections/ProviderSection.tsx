import { Flex } from "@chakra-ui/react";
import GeneralTitle from "../generalTitles/GeneralTitle";

export default function ProviderSection() {
  return (
    <Flex direction="column">
      <GeneralTitle
        title="Be a Provider"
        description="Are you a visionary data analyst, a code virtuoso, or a creative
        algorithm architect? Your expertise can now take center stage within
        our groundbreaking ecosystem. By joining us as a Provider, you're not
        just offering your skills – you're sculpting the future of
        personalized experiences."
        titleName="be"
      />
      <GeneralTitle
        title="Unleash Algorithmic Ingenuity"
        description="Becoming a Provider is your chance to shine. Harness your algorithmic brilliance and immerse users in tailored feeds that capture their imagination. Your code is your artistry, defining how our users' world unfolds. Our platform, your canvas."
        titleName="unleashAlgo"
      />
      <GeneralTitle
        title="Elevate with Algorithmic Craftsmanship"
        description="Craft your algorithm in the language of innovation – Python, C++, or any language of your choice. Your submission is your masterpiece, weaving the fabric of our users' engagement. Hold it to the highest standards, aligning with our platform's guidelines, and optimizing it for seamless performance."
        titleName="elevateWith"
      />
      <GeneralTitle
        title="Fuel Your Offering"
        description="Forge your commitment with a defined monthly offering. This offering symbolizes more than just compensation; it's an investment in the extraordinary experiences you craft. As users choose your algorithm, they're choosing the embodiment of your dedication."
        titleName="fuel"
      />
      <GeneralTitle
        title="Privacy in Focus"
        description="Rest assured, your connection to user data is sacredly guarded. Our platform orchestrates all data processing within its secure confines. You influence experiences from within our fortified walls, ensuring privacy is the cornerstone of every interaction."
        titleName="privacy"
      />
      <GeneralTitle
        title="Your Monetization Oasis"
        description="Our platform thrives when you do. Unveil a world of monetization avenues tailored to your algorithmic artistry. It's a space where your talents flourish and your contributions are honored, all while safeguarding user privacy with an unwavering commitment."
        titleName="yourMonetization"
      />
    </Flex>
  );
}
