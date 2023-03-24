import CustomHead from "@/components/custom-header";
import Dashboard from "@/components/dashboard";
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <CustomHead title="About" description="About GE Anime" />
      <Box>
        <Text>About</Text>
      </Box>
    </>
  );
}

About.getLayout = (page) => {
  return <Dashboard>{page}</Dashboard>;
};
