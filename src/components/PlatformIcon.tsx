import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}

const PlatformIcon = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //By  [key: string]: IconType  we are telling typescript that iconMap is an object with key as string and value as IconType
    pc: FaWindows,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {/* HStack is a horizontal stack */}
        {platform.map((p) => (
          <Icon as={iconMap[p.slug]} color="gray.500" key={p.id} /> //compilation error due to iconMap[p.slug] as there is no type for iconMap
        ))}
      </HStack>
    </>
  );
};

export default PlatformIcon;
