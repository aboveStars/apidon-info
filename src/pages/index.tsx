import { Flex, Text } from "@chakra-ui/react";
import MainTitle from "./components/mainTitle/MainTitle";

export default function Home() {
  return (
    <>
      <Flex bg="black" justify="center" id="root-component" height="100vh">
        <MainTitle />
      </Flex>
    </>
  );
}
