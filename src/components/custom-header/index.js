import React from "react";
import Head from "next/head";

const CustomHead = ({ title, description }) => {
  return (
    <Head>
      <title>Ge Anime - {title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
