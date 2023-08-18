import { backgroundEngineStateAtom } from "@/atoms/backgroundEngineStateAtom";
import Particles from "react-tsparticles";
import { useSetRecoilState } from "recoil";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function StarsAnimatedBg() {
  const setBgEngineState = useSetRecoilState(backgroundEngineStateAtom);

  async function customInit(engine: Engine): Promise<void> {
    await loadStarsPreset(engine);
    setBgEngineState({
      backgroundInitialized: true,
    });
  }

  const options = {
    preset: "stars",
  };

  return <Particles options={options} init={customInit} />;
}
