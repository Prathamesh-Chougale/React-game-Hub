import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import CroppedImage from "../services/image-url";

interface Props {
  onSelectGenre: (g: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  //   const { Genre } = useGenre();
  const { data, isLoading, err } = useGenre();

  if (isLoading) return <Spinner />;
  if (err) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={CroppedImage(g.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(g)}
                fontSize={"lg"}
                variant="link"
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                // whiteSpace="normal"
                // textAlign="left"
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
