import { Box, Flex } from "@chakra-ui/react";
import Title from "../Title";
import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { useRecoilValue } from "recoil";

export default function ProviderSection() {
  const screenModeValue = useRecoilValue(screenModStateAtom);

  return (
    <Flex direction="column">
      <Title
        title="Unleash Algorithmic Ingenuity"
        description="Becoming a Provider is your chance to shine. Harness your algorithmic brilliance and immerse users in tailored feeds that capture their imagination. Your code is your artistry, defining how our users' world unfolds. Our platform, your canvas."
        titleId="provider"
      />
      {screenModeValue === "mobile" && (
        <Box height="100vh" width="100%" zIndex={1} />
      )}
    </Flex>
  );
}
