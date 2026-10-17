import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import "/src/App.css";
import albumImage from "/src/components/music-blog/music-articles-images/yspsfagsil.png";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="Midnight Sun - Zara Larsson Comment Rant"
      datePublished="July 21, 2026"
      tag={[MusicTags.Rambles]}
      isFinished={false}
    >
      <img
        className="center-body"
        src={albumImage}
        alt="Olivia Rodrigo - You Seem Pretty Sad for a Girl So in Love album image"
      />
      <p>This comment is so terrible in so many ways.</p>
      <p>It's dystopian Cyberpunk if it decided to stop at the Y2K era.</p>
      <p>Everything is fake. The dolphins, the water, the grass.</p>
      <p>
        The beat is so pounding and it's trying to make you think that this is
        paradise, but it's horrifying
      </p>
      <p>
        The sun is male, you know what's feminine? THE MOON, LUNA, SELENE.
        You're saying this place is a paradise being controlled under an
        apocalyptic male stuck at midnight forever?
      </p>
    </MusicArticleFormat>
  );
}
