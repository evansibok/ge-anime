import React from "react";
import { Box } from "@chakra-ui/react";
import { AppShell } from "@saas-ui/react";

const Dashboard = ({ children }) => {
  return (
    <AppShell>
      <Box as="main">{children}</Box>
    </AppShell>
  );
};

export default Dashboard;
