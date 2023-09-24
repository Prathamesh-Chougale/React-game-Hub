import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScrore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} border={5}>
      {score}
    </Badge>
  );
};

export default CriticScrore;
