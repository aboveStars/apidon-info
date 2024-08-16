import { Box, Flex } from '@chakra-ui/react'
import Title from '../Title'
import { useRecoilValue } from 'recoil'
import { screenModStateAtom } from '@/atoms/screenModeStateAtom'

export default function UserSection() {
  const screenModeValue = useRecoilValue(screenModStateAtom)

  return (
    <Flex direction="column">
      <Title
        title="Social Media & Marketplace"
        description="Discover a new way to connect with your favorite celebrities and friends. Apidon unites social interaction and digital collectibles in one platform, making it easier than ever to engage, buy, and showcase your unique digital items."
        titleId="vision"
      />
      {screenModeValue === 'mobile' && <Box height="100vh" width="100%" zIndex={1} />}

      <Title
        title="Digital Collectibles Made Simple"
        description="No need for complicated crypto wallets or technical know-how. Apidon simplifies the process, allowing you to purchase, manage, and enjoy digital collectibles with just a few taps."
        titleId="rewards"
      />
      {screenModeValue === 'mobile' && <Box height="100vh" width="100%" zIndex={1} />}
      <Title
        title="Stable Pricing with USD Transactions"
        description="Say goodbye to the volatility of cryptocurrencies. Apidon offers stable, predictable pricing for your digital collectibles by using USD, ensuring a smooth and stress-free purchasing experience with using familiar in-app purchase systems."
        titleId="rate"
      />
      {screenModeValue === 'mobile' && <Box height="100vh" width="100%" zIndex={1} />}
    </Flex>
  )
}
