import { Component } from "react";
import { MusicTags } from "../../assets/enums";

type Props = {
  title: string;
  datePublished: string;
  edited?: string;
  tag?: [MusicTags];
  children?: React.ReactNode;
};

const MusicArticleFormat: React.FC<Props> = ({
  title,
  datePublished,
  edited,
  tag,
  children,
}) => {
  return (
    <div>
      <h2 className="article-date">{datePublished}</h2>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default MusicArticleFormat;
