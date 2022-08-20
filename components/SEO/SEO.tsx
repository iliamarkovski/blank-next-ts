import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  content?: string;
};

const SEO = ({ title, content = "title" }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
