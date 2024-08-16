import { Box, Flex } from '@chakra-ui/react'
import Title from '../Title'
import { screenModStateAtom } from '@/atoms/screenModeStateAtom'
import { useRecoilValue } from 'recoil'

export default function NFTSection() {
  const screenModeValue = useRecoilValue(screenModStateAtom)
  return (
    <Flex direction="column">
      <Title
        title="Showcase Your Collection"
        description="Display your digital collectibles on your profile for the world to see. Apidon allows you to express your unique style and support for your favorite creators, turning your profile into a dynamic showcase of your personal collection."
        titleId="nft"
      />
      {screenModeValue === 'mobile' && <Box height="100vh" width="100%" zIndex={1} />}
    </Flex>
  )
}
