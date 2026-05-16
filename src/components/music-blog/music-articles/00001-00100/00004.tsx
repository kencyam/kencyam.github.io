import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="4th option"
      datePublished="May 15, 2026"
      tag={[MusicTags.SinglesReviews]}
    >
      <p>Hello!</p>
    </MusicArticleFormat>
  );
}
