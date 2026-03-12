import { Component } from "react";
import { MusicTags } from "../../assets/enums";

type Props = {
  title: string;
  datePublished: string;
  dateEdited?: string;
  tag?: [MusicTags];
  children?: React.ReactNode;
};

const MusicArticleFormat: React.FC<Props> = ({
  title,
  datePublished,
  dateEdited,
  tag,
  children,
}) => {
  return (
    <div>
      <h2 className="article-date">
        <b>Published</b>: {datePublished}
      </h2>
      {dateEdited != null ? (
        <h2 className="article-date">
          <b>Last Updated on</b>: {dateEdited}
        </h2>
      ) : null}
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default MusicArticleFormat;
