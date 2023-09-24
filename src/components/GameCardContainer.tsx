import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Prop) => {
  return <Box overflow="hidden">{children}</Box>;
};

export default GameCardContainer;
