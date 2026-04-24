import { Link, useParams, useSearchParams } from "react-router";
import { useState } from "react";
import { MusicTags } from "../../assets/enums";

//When I find out how to tag, I'd switch the switch case to just get posts that have tag enum
export default function MusicBlogSearch() {
  let [searchParams] = useSearchParams();
  switch (Number(searchParams.get("tag"))) {
    case MusicTags.AlbumReviews:
      return (
        <div>
          <h3 className="center">
            <u>
              <b>Album Reviews</b>
            </u>
          </h3>
          <h4>None yet!</h4>
        </div>
      );
    case MusicTags.Rambles:
      return (
        <div>
          <h3 className="center">
            <u>
              <b>Rambles</b>
            </u>
          </h3>
          <h4>None yet!</h4>
        </div>
      );
    case MusicTags.RankingLists:
      return (
        <div>
          <h3 className="center">
            <u>
              <b>Ranking Lists</b>
            </u>
          </h3>
          <ul
            className="remove-list-bullet"
            style={{ paddingLeft: "0px", fontSize: "xx-large" }}
          >
            <li>
              <Link to="/musicblog/00001">
                2025 Billboard Hit Songs I Liked
              </Link>
            </li>
            <li>
              <Link to="/musicblog/00002">
                2025 Billboard Hit Songs I Disiked
              </Link>
            </li>
          </ul>
        </div>
      );
    case MusicTags.SinglesReviews:
      return (
        <div>
          <h3 className="center">
            <u>
              <b>Singles Reviews</b>
            </u>
          </h3>
          <h4>None yet!</h4>
        </div>
      );
    case MusicTags.PersonalNostalgia:
      return (
        <div>
          <h3 className="center">
            <u>
              <b>Personal Nostalgia</b>
            </u>
          </h3>
          <h4>None yet!</h4>
        </div>
      );
    case MusicTags.Artists:
      return (
        <div>
          <h3 className="center">
            <u>
              <b>Artists</b>
            </u>
          </h3>
          <h4>None yet!</h4>
        </div>
      );
    case MusicTags.Retrospection:
      return (
        <div>
          <h3 className="center">
            <u>
              <b>Retrospection</b>
            </u>
          </h3>
          <h4>None yet!</h4>
        </div>
      );
    case MusicTags.Miscellaneous:
      return (
        <div>
          <h3 className="center">
            <u>
              <b>Miscellaneous</b>
            </u>
          </h3>
          <h4>None yet!</h4>
        </div>
      );
    default:
      return <div>How did you get here? There's no tags for this!</div>;
  }
}
