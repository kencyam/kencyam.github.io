import { Component } from "react";
import MusicArticleFormat from "../../MusicArticleFormat";
import MusicArticleBodyFormat from "../../MusicArticleBodyFormat";
import MusicArticleSongInfoFormat from "../../MusicArticleSongInfoFormat";
import { MusicTags } from "../../../../assets/enums";

export default function MusicArticle3() {
  return (
    <MusicArticleFormat
      title="[Single] Drop Dead - Olivia Rodrigo"
      datePublished="April 24, 2026"
      tag={[MusicTags.SinglesReviews]}
    >
      <p>Olivia Rodrigo!</p>
    </MusicArticleFormat>
  );
}
