// import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/code-gif.gif";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const navbar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default navbar;
