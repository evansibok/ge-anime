import AnimeList from "@/components/anime-list";
import CustomHead from "@/components/custom-header";
import Dashboard from "@/components/dashboard";
import { styles } from "@/styles/home";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <CustomHead title="Home" description="GE Anime Home" />
      <Box sx={styles.container}>
        <AnimeList />
      </Box>
    </>
  );
}

Home.getLayout = (page) => {
  return <Dashboard>{page}</Dashboard>;
};
