import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelition from "./GameCardSkelition";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, err, isLoading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (err) return <Text>{err}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={3}
      borderRadius={10}
      padding={5}
      overflow="hidden"
    >
      {isLoading &&
        skeleton.map((s) => (
          <GameCardContainer key={s}>
            <GameCardSkelition key={s} />
          </GameCardContainer>
        ))}
      {data.map((g) => (
        <GameCardContainer key={g.id}>
          <GameCard key={g.id} game={g} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
