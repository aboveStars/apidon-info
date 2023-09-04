import { screenModStateAtom } from "@/atoms/screenModeStateAtom";
import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
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

  const [screenModeState, setScreenModeState] =
    useRecoilState(screenModStateAtom);

  useEffect(() => {
    setScreenModeState(isMobile ? "mobile" : "large");
  }, [isMobile]);

  return <>{isMobile ? <SmallScreenLayout /> : <LargeScreenLayout />}</>;
}
