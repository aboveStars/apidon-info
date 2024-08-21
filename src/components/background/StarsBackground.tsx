import { isBackgroundReadyAtom } from '@/atoms/isBackgroundReadyAtom'
import { loadStarsPreset } from '@tsparticles/preset-stars'
import { initParticlesEngine, Particles } from '@tsparticles/react'

import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

export default function StarsBackground() {
  const setIsBackgroundReady = useSetRecoilState(isBackgroundReadyAtom)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine)
      setIsBackgroundReady(true)
    })
  }, [])

  return (
    <Particles
      id="tsparticles"
      options={{
        preset: 'stars',
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  )
}
