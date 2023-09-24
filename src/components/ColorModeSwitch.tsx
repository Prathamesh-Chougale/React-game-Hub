// import React from 'react'
import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        //we can use whitespace = "nowrap" to prevent the text from wrapping
      />
    </HStack>
  );
};

export default ColorModeSwitch;
