import React from 'react'
import Title from '../Title'
import { Box } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { screenModStateAtom } from '@/atoms/screenModeStateAtom'

export default function WelcomeSection() {
  const screenModeValue = useRecoilValue(screenModStateAtom)

  return (
    <>
      <Title
        titleId="welcome"
        title="The Next Generation Fan Experience"
        description="The magnificent platform that enables users to connect with their idols, buy and showcase exclusive digital collectibles, while providing a seamless social experience."
      />
      {screenModeValue === 'mobile' && <Box height="100vh" width="100%" zIndex={1} />}
    </>
  )
}
