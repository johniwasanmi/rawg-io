import React from "react";
import { Game } from "../hooks/useGames";
import { Image, Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconLIst from "./PlatformIconLIst";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconLIst
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconLIst>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
