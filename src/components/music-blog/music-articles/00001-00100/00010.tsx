//42 views https://www.youtube.com/watch?v=gCPRfACCf2c
//250 views https://www.youtube.com/watch?v=tqIVs8m5b2w
//199 views https://www.youtube.com/watch?v=-t1vZSlvpk0
//126 views https://www.youtube.com/watch?v=4lxlcIgDQQE
import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import "/src/App.css";
import albumImage from "/src/components/music-blog/music-articles-images/drake-iceman.jpg";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="October 2026 Youtube Random Low Viewcount Suggested Shoutouts"
      datePublished="October 16, 2026"
      tag={[MusicTags.SinglesReviews, MusicTags.RandomRecommendations]}
      isFinished={true}
    >
      <iframe src="https://www.youtube.com/embed/gCPRfACCf2c"></iframe>
      <h4>Black Belt - Grace Givertz ft. Rat Tally</h4>
      <p>
        This is a cool indie-folk/rock song from Grace's 2nd album{" "}
        <u>Midnight Feature</u>, which features a wide variety of artists within
        the LGBTQ+, BIPOC, and/or disabled community. Scathing, yet collected,
        they both call out the childish men (who think they're different and
        better than the other guys) that they have to deal with while admitting
        that they kind of do like them despite it all. The instrumentation's
        fun, the lyrics are relatable, and the song as a whole is, for a lack of
        a better term, pragmatically honest.
      </p>
      <p>
        Grace Givertz has her own{" "}
        <a href="https://www.gracegivertz.com/" target="_blank">
          website
        </a>
        . Rat Tally has a{" "}
        <a href="https://soundcloud.com/rattally" target="_blank">
          SoundCloud
        </a>{" "}
        with more of her music. Go and check them out.
      </p>

      <iframe src="https://www.youtube.com/embed/tqIVs8m5b2w"></iframe>
      <h4>CUNTY & COCKY - motherfather</h4>
      <p>Holy moly...</p>
      <p>
        The fact that I write this over a month late and it still hasn't reached
        1,000 views shocks me, even more than the music video. It has such good
        production and choreography.
      </p>
      <p>
        motherfather's devilish vocals mixed and blown out with the heavy, low
        beats makes me really feel like I'm in a club where my ears cannot hear
        the music and I'm overwhelmed with the atmosphere. You probably can't
        show this to everyone, but those who are mature enough can enjoy
        motherfather's self-introduction song. Sidenote, the actors are really
        great. Must have been a blast to create the script.
      </p>
      <p>
        Check out motherfather's Spotify profile{" "}
        <a
          href="https://open.spotify.com/artist/7ElrUAkUXiab4dG7RDThaN"
          target="_blank"
        >
          here
        </a>
        .
      </p>

      <iframe src="https://www.youtube.com/embed/-t1vZSlvpk0"></iframe>
      <h4>It's Wrong - At Zero</h4>
      <p>
        Solid garage rock, post-punk track from At Zero. Immediately catchy,
        loud, and enjoyable. Typical heartbreak song in the genre, but the
        high-energy, compressed vocals and instrumentals elevate it. Just a
        great, easy listen to boost your energy levels.
      </p>
      <p>
        I cannot find any outside website for this band. There's a bandcamp for
        "At Zero" but I believe it's another band with the same name. Maybe when
        I'm more sure, I'll update this entry.
      </p>

      <iframe src="https://www.youtube.com/embed/4lxlcIgDQQE"></iframe>
      <h4>That's Why I Do Drugs - xray xeroxx</h4>
      <p>
        Classic silly garage punk song. Want a rocking song that goes so fast,
        you'd think they're trying to finish their act and then rush off the
        stage to collect their money? They got you here. Simple and satisfying.
      </p>
      <p>
        This comes from their latest album <u>Brainwashing The Populace</u>. If
        you like it, check out more in their Bandcamp{" "}
        <a
          href="https://xrayxeroxx.bandcamp.com/album/brainwashing-the-populace"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </MusicArticleFormat>
  );
}
