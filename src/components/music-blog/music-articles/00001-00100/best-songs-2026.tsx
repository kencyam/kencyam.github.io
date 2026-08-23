import MusicArticleFormat from "../../MusicArticleFormat";
import MusicArticleBodyFormat from "../../MusicArticleBodyFormat";
import MusicArticleSongInfoFormat from "../../MusicArticleSongInfoFormat";
import { MusicTags } from "../../../../assets/enums";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="2025 Billboard Hit Songs I Liked"
      datePublished="March 11, 2026"
      tag={[MusicTags.RankingLists]}
      isFinished={true}
    >
      <p>Opening paragraph talking about 2026</p>
      {/**/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/"
          songTitle=""
          songArtist=""
          album=""
          highestChartingPos={0}
          weeksOnChart={0}
          billboardYearEndRank={0}
          cumulativeWeeksOnChart={0}
          cumulativeHighestChartingPos={0}
          previousBillboardYearEndRank={0}
          year="2026"
          previousBillboardYearEndYear="2025"
        >
          <p></p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*2 Hard 4 The Radio*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/"
          songTitle=""
          songArtist=""
          album=""
          highestChartingPos={0}
          weeksOnChart={0}
          billboardYearEndRank={0}
          cumulativeWeeksOnChart={0}
          cumulativeHighestChartingPos={0}
          previousBillboardYearEndRank={0}
          year="2026"
          previousBillboardYearEndYear="2025"
        >
          <p>
            Probably the only song I would say I liked from Iceman. It doesn't
            really fit well in his "macho" album, but standalone, it's cool. If
            only he were honest with the song title. Should be renamed "Decently
            Catchy -- Send It to Radio".
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
    </MusicArticleFormat>
  );
}
