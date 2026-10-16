import MusicArticleFormat from "../../MusicArticleFormat";
import MusicArticleBodyFormat from "../../MusicArticleBodyFormat";
import MusicArticleSongInfoFormat from "../../MusicArticleSongInfoFormat";
import { MusicTags } from "../../../../assets/enums";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="2026 Billboard Hit Songs I Liked"
      datePublished="XX, 2026"
      tag={[MusicTags.RankingLists]}
      isFinished={false}
    >
      <p>
        Opening paragraph talking about 2026. Somehow it was an even bleaker
        year than last year. I didn't mind 2025 at all, but this year was rough
        for me to listen to. Talk about how there's a few songs I'd put here if
        not for my rules, and I didn't expect this year to have so many songs to
        be caught between years (CBY) or stop right at 8-9 weeks and peak at
        21-25. I'll shout them out here as honorable mentions:
      </p>
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
