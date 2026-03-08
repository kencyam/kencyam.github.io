import { Component } from "react";

type Props = {
  children?: React.ReactNode;
};

const MusicArticleBodyFormat: React.FC<Props> = ({ children }) => {
  return <article>{children}</article>;
};

export default MusicArticleBodyFormat;
