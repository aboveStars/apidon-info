import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import InitialScreen from "@/components/InitialScreen";
import { useBreakpointValue } from "@chakra-ui/react";
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
        <InitialScreen />
      ) : screenStatus === "mobile" ? (
        <SmallScreenLayout />
      ) : (
        <LargeScreenLayout />
      )}
    </>
  );
}
