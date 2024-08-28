import { titleIDs, titles } from '@/atoms/titleIdStateAtom'
import { Flex, Image } from '@chakra-ui/react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

type Props = {
  titleId: titleIDs
  posterURL: string
}

export default function SmallScreenPhone({ titleId, posterURL }: Props) {
  const [n, setN] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6>(0)

  const { scrollYProgress } = useScroll()

  const [location, setLocation] = useState(100)

  useMotionValueEvent(scrollYProgress, 'change', (ratio) => {
    let processNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6
    if (ratio <= 0.12) {
      processNumber = 0
      setN(processNumber)
    } else if (ratio <= 0.2916) {
      processNumber = 1
      setN(processNumber)
    } else if (ratio <= 0.4583) {
      processNumber = 2
      setN(processNumber)
    } else if (ratio <= 0.625) {
      processNumber = 3
      setN(processNumber)
    } else if (ratio <= 0.7916) {
      processNumber = 4
      setN(processNumber)
    } else if (ratio <= 0.9583) {
      processNumber = 5
      setN(processNumber)
    } else {
      processNumber = 6
      setN(processNumber)
    }

    let locationNumeric: number = 0

    if (titles[processNumber] !== titleId) {
      if (processNumber % 2 === 0) {
        locationNumeric = 100
      } else {
        locationNumeric = -100
      }

      return setLocation(locationNumeric)

      // const location = `${locationNumeric}%`

      // return gsap.to(ref.current, {
      //   x: location,
      //   duration: '0',
      // })
    }

    if (ratio <= 0.12) {
      locationNumeric = -1600 * ratio + 100
    } else if (ratio <= 0.286) {
      locationNumeric = 1602.5641025641023 * ratio - 367.30769230769226
    } else if (ratio <= 0.452) {
      locationNumeric = -1596.1691939345576 * ratio + 631.5243415802078
    } else if (ratio <= 0.62) {
      locationNumeric = 1600 * ratio - 900
    } else if (ratio <= 0.79) {
      locationNumeric = -1600 * ratio + 1166.56
    } else if (ratio <= 0.9571) {
      locationNumeric = 1600 * ratio - 1433.28
    } else {
      locationNumeric = 100
    }

    // const location = `${locationNumeric}%`

    // gsap.to(ref.current, {
    //   x: location,
    //   duration: '0',
    // })

    setLocation(locationNumeric)
  })

  return (
    <Flex
      hidden={titleId !== titles[n]}
      height="100vh"
      justify="center"
      width="100%"
      position="fixed"
      userSelect="none"
      zIndex={2}
      style={{
        transform: `translateX(${location}%)`,
      }}
    >
      <Image
        objectFit="contain"
        py="1.5"
        src={posterURL}
        fallbackStrategy="onError"
        style={{
          height: '100%',
          borderRadius: '3rem',
        }}
        pointerEvents="none"
        userSelect="none"
      />
    </Flex>
  )
}
