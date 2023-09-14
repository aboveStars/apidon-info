import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import LargeScreenLayout from "./LargeScreenLayout";
import SmallScreenLayout from "./SmallScreenLayout";

export default function Layout() {
  const isMobileRaw = useBreakpointValue(
    {
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false,
    },
    {
      fallback: "undefined",
    }
  );

  const [screenStatus, setScreenStatus] = useState<
    "undefined" | "mobile" | "large"
  >("undefined");

  const setScreenModeState = useSetRecoilState(screenModStateAtom);

  useEffect(() => {
    if (isMobileRaw === undefined) {
      return setScreenStatus("undefined");
    }

    setScreenStatus(isMobileRaw ? "mobile" : "large");
    setScreenModeState(isMobileRaw ? "mobile" : "large");
  }, [isMobileRaw]);

  return (
    <>
      {screenStatus === "undefined" ? (
        <Flex
          bg="black"
          width="100%"
          height="100vh"
          justify="center"
          align="center"
          direction="column"
        >
          <img
            src="/images/initial/grayscale.png"
            width="30px"
            height="30px"
            style={{
              borderRadius: "5px",
              opacity: 0.5,
            }}
          />
          <Text
            fontWeight="600"
            color="gray"
            fontSize="3px"
            mt="0.5"
            maxWidth="30px"
          >
            aboveStars
          </Text>
        </Flex>
      ) : screenStatus === "mobile" ? (
        <SmallScreenLayout />
      ) : (
        <LargeScreenLayout />
      )}
    </>
  );
}
