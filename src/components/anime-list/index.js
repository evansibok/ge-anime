import { animeListColumns, dummyTableData } from "@/config";
import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Table from "./Table";

const AnimeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState(null);
  const [animeList, setAnimeList] = useState(null);
  return (
    <>
      {dummyTableData && (
        <Table columns={animeListColumns} data={dummyTableData} />
      )}
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          mt: "40px",
        }}
      >
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
