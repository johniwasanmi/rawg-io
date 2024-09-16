import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      width="100vw" // Ensure the Grid takes full viewport width
    >
      <GridItem area="nav" width="100%">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;
