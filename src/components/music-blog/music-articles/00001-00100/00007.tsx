import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import "/src/App.css";
import { Link } from "react-router-dom";
export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="Compilation of All Public Charted Billboard Songs Sorted By Year (1959-Present)"
      datePublished="July 24, 2026"
      tag={[MusicTags.Miscellaneous]}
      isFinished={true}
    >
      <Link to={"/musicblog/archives"}>Billboard Calendar Charts</Link>
      <p>
        So a while ago, Billboard blocked viewing the history of what was on the
        Charts. If you want to see, you need to subscribe to them. Weirdly, you
        can still see them, but you have to quickly play with the website's
        loading. When you visit a past week, you will temporarily see the page,
        but then the wall telling you to subscribe goes over it and you cannot
        remove it. However, the html of information is still available under it.
        What you can do is stop the loading of the page midway before the
        website validates that you're a subscriber. While funny, it's still
        annoying.
      </p>
      <p>
        What I have here will be a continual archive of the data for the
        Billboard Hot 100. As of July 24, 2026, the archive will have all the
        songs starting from the charting year of 1959 (Specifically December 6,
        1958). There are csv files of all the songs with their artist, how many
        weeks the songs have been on the chart in the Billboard calendar year
        and how many in history at the time of the end date of the Billboard
        calendar year. There will also be the peak of the song in both cases as
        well for better understanding of the song's timeline.
      </p>
      <p>
        For example, Brenda Lee's "Rockin' Around the Christmas Tree" in the
        2021 file will say that the song peaked at #2 both historically and in
        the calendar year. It will say it's on the 2021 charts for 7 weeks, and
        39 weeks in the history of Billboard. In the 2025 file, the song peaked
        at #2 again, but the true peak is #1 as it reached that in the 2024
        calendar year. The 2025 file will also say that it lasted for 6 weeks in
        the calendar year and 64 weeks total. That is to keep continuity.
      </p>
      <p>
        I will update the archive periodically with more information. When the
        2026 calendar year finishes, I will add that entry. Further expansion
        would probably be by specific weeks. Maybe even by different charts if
        requested or if I feel I want to.
      </p>
      <p>
        Hope that this archive is useful to anyone who wishes to learn more
        about pop music history.
      </p>
      <Link to={"/musicblog/archives"}>Billboard Calendar Charts</Link>
    </MusicArticleFormat>
  );
}
