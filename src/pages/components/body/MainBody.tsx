import React from "react";
import MainUser from "./user/MainUser";
import { Flex } from "@chakra-ui/react";
import MainProviders from "./providers/MainProviders";
import MainNft from "./nft/MainNft";

export default function MainBody() {
  return (
    <Flex width="100%" px="2" direction="column" gap="5">
      <MainUser />
      <MainNft />
      <MainProviders />
    </Flex>
  );
}
