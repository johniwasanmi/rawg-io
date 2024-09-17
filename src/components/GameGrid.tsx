import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <div>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding="10px"
          spacing={10}
        >
          {games.map((game) => (
            <GameCards key={game.id} game={game}></GameCards>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
