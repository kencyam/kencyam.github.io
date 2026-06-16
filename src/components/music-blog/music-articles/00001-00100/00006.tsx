import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import "/src/App.css";
import albumImage from "/src/components/music-blog/music-articles-images/drake-iceman.jpg";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="Olivia Rodrigo - You Seem Pretty Sad for a Girl So in Love"
      datePublished="June 15, 2026"
      tag={[MusicTags.AlbumReviews]}
    >
      <img
        className="center-body"
        src={albumImage}
        alt="Olivia Rodrigo - You Seem Pretty Sad for a Girl So in Love album image"
      />
      <p></p>
    </MusicArticleFormat>
  );
}
