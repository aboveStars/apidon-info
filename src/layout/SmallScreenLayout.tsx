import FooterSection from '@/components/sections/FooterSection'
import NFTSection from '@/components/sections/NFTSection'
import ProviderSection from '@/components/sections/ProviderSection'
import SmallPhoneSection from '@/components/sections/SmallPhoneSection'
import UserSection from '@/components/sections/UserSection'
import WelcomeSection from '@/components/sections/WelcomeSection'
import { Flex, Image } from '@chakra-ui/react'

export default function SmallScreenLayout() {
  return (
    <Flex id="small-screen" direction="column">
      <Image
        src="/bgForMobile.png"
        height="100vh"
        width="100%"
        position="fixed"
        objectFit="fill"
        pointerEvents="none"
        userSelect="none"
      />
      <WelcomeSection />
      <UserSection />
      <NFTSection />
      <ProviderSection />
      <FooterSection />
      <SmallPhoneSection />
    </Flex>
  )
}
