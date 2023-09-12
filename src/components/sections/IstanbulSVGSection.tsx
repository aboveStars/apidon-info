import { Box } from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { clearIstanbulAllPath } from "../IstanbulPaths";

type Props = {
  animate: boolean;
};

export default function IstanbulSVGSection({ animate }: Props) {
  const animationControls = useAnimationControls();
  const secondAC = useAnimationControls();

  useEffect(() => {
    if (!animate) return;
    handleAnimations();
  }, [animate]);

  const handleAnimations = async () => {
    try {
      await animationControls.start({
        pathLength: 1,
        transition: {
          delay: 1,
          ease: [1, 0.01, 0.9, 0.99],
          duration: 3,
          type: "tween",
        },
      });
    } catch (error) {
      // not important
    }

    try {
      await secondAC.start({
        fillOpacity: 1,
        transition: {
          delay: 0,
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    } catch (error) {
      // not important
    }
  };

  return (
    <Box
      p={0}
      width="100%"
      height="auto"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <svg width="100%" viewBox="0 0 425 115">
        <motion.g
          fill="#1b1918"
          fillRule="evenodd"
          fillOpacity={0}
          animate={secondAC}
        >
          <motion.path
            pathLength={0}
            animate={animationControls}
            strokeWidth="1"
            strokeLinecap="butt"
            stroke="#fff"
            d={clearIstanbulAllPath}
          />
        </motion.g>
      </svg>
    </Box>
  );
}
