import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import CriticScrore from "./CriticScrore";
import CroppedImage from "../services/image-url";
interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card>
      <Image src={CroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcon
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScrore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
        {/* hii */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
