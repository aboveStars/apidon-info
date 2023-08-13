import { Flex } from "@chakra-ui/react";
import GeneralTitle from "../generalTitles/GeneralTitle";

export default function UserSection() {
  return (
    <Flex direction="column">
      <GeneralTitle
        title="Unleash Your Vision"
        description="Revolutionizing the way you experience social media, our innovative
              platform puts you in control like never before. Say goodbye to the
              one-size-fits-all approach of traditional social platforms. With us,
              you're the curator of your own digital journey."
        titleName="unLeash"
      />
      <GeneralTitle
        title="Crafting Your Personalized Experience"
        description="Unleash the power of choice by handpicking a provider from a diverse array of algorithm creators. These providers don't just offer algorithms; they craft experiences. They sculpt your feed, tailor-fitting content to your preferences, and amplifying what truly matters to you."
        titleName="crafting"
      />
      <GeneralTitle
        title="Rewards as Unique as Your Engagement"
        description="Your data is valuable, and we believe you should be rewarded for it. Every swipe, every interaction, every preference - they all contribute to a dynamic tapestry that makes your digital world unique. As a token of our appreciation, we reward you with monthly crypto payments. Your engagement is your asset, and we want you to share in the success you help create."
        titleName="rewards"
      />
      <GeneralTitle
        title="Seamless Flexibility for Your Preferences"
        description="Change is the only constant, and your preferences are no exception. Feel free to switch providers whenever you desire. Your journey is your own, and we're here to empower your choices."
        titleName="seamless"
      />
      <GeneralTitle
        title="Elevate the Platform with Your Voice"
        description="We're not just transforming the way you consume content; we're revolutionizing the way you express satisfaction. Rate your providers, let your voice be heard, and foster a community of excellence. Your feedback drives us, your fellow users, and the providers to elevate the platform to new heights."
        titleName="elevate"
      />
      <GeneralTitle
        title="Become the Platform"
        description="Welcome to a new era of social media, where you're not just a user - you're a curator, a benefactor, and a beacon of change. Join us today and embark on a journey where you're not just a part of the platform; you are the platform."
        titleName="become"
      />
    </Flex>
  );
}
