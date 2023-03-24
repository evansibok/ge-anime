import React from "react";
import { Box } from "@chakra-ui/react";
import { DataTable } from "@saas-ui/react";
import { styles } from "@/styles/anime-list";

const Table = ({ columns, data }) => {
  return (
    <Box sx={styles.table}>
      <DataTable columns={columns} data={data} />
    </Box>
  );
};

export default Table;
