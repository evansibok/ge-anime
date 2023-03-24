import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { AppShell } from "@saas-ui/react";
import { sideNav } from "@/config";
import { styles } from "@/styles/dashboard";
import Image from "next/image";

const Dashboard = ({ children }) => {
  return (
    <AppShell
      sidebar={
        <Box sx={styles.sidebar}>
          <Box sx={styles.logo}>
            <Image
              src="/ge-anime-logo.png"
              alt="grassroots-anime"
              width={40}
              height={40}
              style={{ cursor: "pointer" }}
              priority
            />
          </Box>
          {sideNav.map((nav) => (
            <Link key={nav.title} href={nav.link}>
              <Box sx={styles.sideNavigation}>{nav.title}</Box>
            </Link>
          ))}
        </Box>
      }
    >
      <Box as="main">{children}</Box>
    </AppShell>
  );
};

export default Dashboard;
