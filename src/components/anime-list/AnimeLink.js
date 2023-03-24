import React from "react";
import { Button } from "@chakra-ui/react";
import { styles } from "../../styles/anime-list";

const AnimeLink = ({ url }) => (
  <Button onClick={() => window.open(url, "_blank")} sx={styles.animeLink}>
    {url}
  </Button>
);

export default AnimeLink;
