import { Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";

type Props = {
  title: string;
  description: string;
};

export default function ShortcutButton({ title, description }: Props) {
  const [isMouseHovered, setIsMouseHovered] = useState(false);

  const handleMouseHover = (hovered: boolean) => {
    setIsMouseHovered(hovered);
  };

  return (
    <Flex
      padding="5"
      borderColor="white"
      border="1px solid rgba(255,255,255,.12)"
      borderRadius="lg"
      bg={
        isMouseHovered
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(255, 255, 255, 0.08)"
      }
      style={{
        transition: "background-color .5s ease",
      }}
      gap="10"
      cursor="pointer"
      onMouseEnter={() => {
        handleMouseHover(true);
      }}
      onMouseLeave={() => {
        handleMouseHover(false);
      }}
      width={{
        sm: "100%",
        md: "100%",
        lg: "20rem",
        xl: "22rem",
      }}
      height="10rem"
      position="relative"
    >
      <Flex direction="column" id="text-area">
        <Text as="b" color="white" id="shortcut-title" fontSize="lg">
          {title}
        </Text>
        <Text id="shortcut-des" color="white" fontSize="md">
          {description}
        </Text>
      </Flex>
      <Flex
        position="absolute"
        style={{
          transform: isMouseHovered ? "translate(0.3rem)" : "translate(0)",
          transition: "all 0.3s ease",
        }}
        bottom="8"
        right="5"
      >
        <Icon
          as={isMouseHovered ? BsArrowRightCircleFill : BsArrowRightCircle}
          color="white"
          fontSize="xl"
        />
      </Flex>
    </Flex>
  );
}
