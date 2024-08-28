import { titleIDs, titleIdStateAtom } from '@/atoms/titleIdStateAtom'
import { Flex, Image } from '@chakra-ui/react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'

type Props = {
  titleId: titleIDs
  posterURL?: string
}

export default function LargeScreenPhone({ titleId, posterURL }: Props) {
  const titleIdStateValue = useRecoilValue(titleIdStateAtom)
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
  })

  return (
    <Flex
      ref={ref}
      width="100%"
      height="100%"
      position="absolute"
      justify="flex-end"
      py={5}
      px={20}
      paddingRight={32}
      transform="auto"
      transition="all 1s ease-in-out .1s"
      translateX={titleId === 'welcome' && !inView ? '-100%' : 0}
      rotate={titleId === 'welcome' && !inView ? '-90deg' : '0deg'}
      scale={titleId === 'welcome' && !inView ? '0.5' : '1'}
      opacity={titleIdStateValue === titleId ? 1 : 0}
      userSelect="none"
      pointerEvents={titleId === titleIdStateValue ? 'unset' : 'none'}
    >
      <Image
        py="1.5"
        src={posterURL}
        objectFit="contain"
        style={{
          height: '100%',
        }}
        pointerEvents="none"
        userSelect="none"
      />
    </Flex>
  )
}
