import { animeListColumns, dummyTableData } from "@/config";
import useAnimes from "@/hooks/useAnimes";
import { styles } from "@/styles/anime-list";
import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Table from "./Table";

const query = `
  query getAnimes($page: Int, $perPage: Int, $startDate: FuzzyDateInt, $genres: [String], $sort: [MediaSort]) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(startDate_greater: $startDate, genre_in: $genres, sort: $sort, type: ANIME) {
        title {
          romaji
          english
          native
          userPreferred
        }
        siteUrl
      }
    }
  }
`;

const AnimeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState(null);
  const [animeList, setAnimeList] = useState(null);

  const { data, loading } = useAnimes(query, {
    page: currentPage,
    perPage: 20,
    sort: ["START_DATE"],
    genres: ["Action", "Fantasy"],
    startDate: 20210000,
  });
  console.log("data:::", data);

  return (
    <>
      {dummyTableData && (
        <Table columns={animeListColumns} data={dummyTableData} />
      )}
      <Box sx={styles.btnContainer}>
        {currentPage > 1 && (
          <Button sx={styles.btn} onClick={goToPrev}>
            Previous
          </Button>
        )}
        {pageInfo?.hasNextPage && (
          <Button sx={styles.btn} onClick={goToNext}>
            Next
          </Button>
        )}
      </Box>
    </>
  );
};

export default AnimeList;
