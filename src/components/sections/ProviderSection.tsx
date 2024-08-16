import { Box, Flex } from '@chakra-ui/react'
import Title from '../Title'
import { screenModStateAtom } from '@/atoms/screenModeStateAtom'
import { useRecoilValue } from 'recoil'

export default function ProviderSection() {
  const screenModeValue = useRecoilValue(screenModStateAtom)

  return (
    <Flex direction="column">
      <Title
        title="Creativity for Everyone"
        description="Apidon isn't just for celebrities. It's a platform where anyone can create, buy, and sell digital collectibles. Express your creativity, share your passion, and participate in a vibrant community."
        titleId="provider"
      />
      {screenModeValue === 'mobile' && <Box height="100vh" width="100%" zIndex={1} />}
    </Flex>
  )
}
