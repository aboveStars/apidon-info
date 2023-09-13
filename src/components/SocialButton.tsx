import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  isMobile: boolean;
  buttonName: string;
  iconURL: string;
  socialMediaLink: string;
};

export default function SocialButton({
  isMobile,
  buttonName,
  iconURL,
  socialMediaLink,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={socialMediaLink}
      style={{
        display: "flex",
        width: "25%",
        height: "auto",
        maxWidth: "100px",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Flex
        width="100%"
        height="100%"
        direction="column"
        align="center"
        justify="center"
        gap="2"
        cursor="pointer"
        onMouseEnter={() => {
          if (isMobile) return;
          setHovered(true);
        }}
        onMouseLeave={() => {
          if (isMobile) return;
          setHovered(false);
        }}
      >
        <Image
          src={iconURL}
          width="100px"
          transform="auto"
          transition="transform 1.5s ease-in-out"
          rotate={hovered ? "360deg" : "0deg"}
        />
        <Text color="#a1a1a6" fontSize="xs" fontWeight="600">
          {buttonName}
        </Text>
      </Flex>
    </a>
  );
}
