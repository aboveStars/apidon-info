import { Flex, Text } from "@chakra-ui/react";
import MainTitle from "./components/mainTitle/MainTitle";
import MainBody from "./components/body/MainBody";

export default function Home() {
  return (
    <>
      <Flex
        justify="center"
        id="root-component"
        width="100%"
        direction="column"
        gap="5"
      >
        <MainTitle />
        <MainBody />
      </Flex>
    </>
  );
}
