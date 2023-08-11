import { Flex } from "@chakra-ui/react";

import GeneralTitle from "./components/generalTitles/GeneralTitle";
import PhoneMockUp from "./components/phoneMockup/PhoneMockUp";
import { useRecoilValue } from "recoil";
import { sectionNumberStateAtom } from "@/atoms/sectionNumberStateAtom";
import { useEffect } from "react";

export default function Home() {
  const sectionNumberState = useRecoilValue(sectionNumberStateAtom);

  useEffect(() => {
    console.log("We are at: ", sectionNumberState, ". section");
  }, [sectionNumberState]);

  return (
    <>
      <PhoneMockUp />
      <Flex
        justify="center"
        id="root-component"
        width="100%"
        direction="column"
        gap="5"
      >
        <GeneralTitle
          title="The Next Generation Social Media"
          description=" The magnificent platform enables users to select their algorithms,
   create NFTs that are marketable, and additionally welcomes algorithm
   creators to participate and generate income."
          sectionNumber={1}
        />
        <GeneralTitle
          title="Unleash Your Vision"
          description="Revolutionizing the way you experience social media, our innovative
            platform puts you in control like never before. Say goodbye to the
            one-size-fits-all approach of traditional social platforms. With us,
            you're the curator of your own digital journey."
          sectionNumber={2}
        />
        <GeneralTitle
          title="Unlock Creativity"
          description="Transform your posts into timeless treasures."
          sectionNumber={3}
        />
        <GeneralTitle
          title="Be a Provider"
          description="Are you a visionary data analyst, a code virtuoso, or a creative
          algorithm architect? Your expertise can now take center stage within
          our groundbreaking ecosystem. By joining us as a Provider, you're not
          just offering your skills – you're sculpting the future of
          personalized experiences."
          sectionNumber={4}
        />
      </Flex>
    </>
  );
}
