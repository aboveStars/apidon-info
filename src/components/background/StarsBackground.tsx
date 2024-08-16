import { loadStarsPreset } from '@tsparticles/preset-stars'
import { initParticlesEngine, Particles } from '@tsparticles/react'

import React, { useEffect } from 'react'

export default function StarsBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine)
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
