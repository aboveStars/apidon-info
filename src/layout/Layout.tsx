import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import LargeScreenLayout from "./LargeScreenLayout";
import SmallScreenLayout from "./SmallScreenLayout";

export default function Layout() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  });

  const setScreenModeState = useSetRecoilState(screenModStateAtom);

  useEffect(() => {
    setScreenModeState(isMobile ? "mobile" : "large");
  }, [isMobile]);

  return <>{isMobile ? <SmallScreenLayout /> : <LargeScreenLayout />}</>;
}
