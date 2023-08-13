import { Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";

type Props = {
  title: string;
  description: string;
  behavior: () => void;
};

export default function ShortcutButton({
  title,
  description,
  behavior,
}: Props) {
  const [isMouseHovered, setIsMouseHovered] = useState(false);

  const handleMouseHover = (hovered: boolean) => {
    setIsMouseHovered(hovered);
  };

  return (
    <Flex
      padding="5"
      border="1px solid rgba(255,255,255,.12)"
      borderRadius="2xl"
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
        base: "100%",
        lg: "20rem",
      }}
      height="11rem"
      position="relative"
      onClick={behavior}
    >
      <Flex direction="column" id="text-area" gap="2" pt="2">
        <Text color="white" id="shortcut-title" fontSize="2xl" fontWeight="700">
          {title}
        </Text>
        <Text id="shortcut-des" color="#adabb2" fontSize="md" fontWeight="500">
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
