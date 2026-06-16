import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import "/src/App.css";
import albumImage from "/src/components/music-blog/music-articles-images/drake-iceman.jpg";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="Bright Side Breathing - Harry Prasetya Tan"
      datePublished="June 16, 2026"
      tag={[MusicTags.SinglesReviews, MusicTags.RandomRecommendations]}
    >
      <iframe src="https://www.youtube.com/embed/EftR5a2-6Cg"></iframe>
      <p>
        When I listen to music, I see Youtube recommending me small artists that
        recently uploaded a new song, with almost all of them holding fewer than
        a thousand views. Every so often, I bite the bullet and click on them
        out of curiosity. This song was one of the lucky ones blessed by the
        algorithms in April.
      </p>
      <p>
        One of the most upbeat, optimistic songs I've ever heard in my life. We
        went way past saccharine with this one, but you know, the artist is
        going all out on it, and I rock with it. It's so Millennial -- just all
        happy party songs telling you to have a good time no matter what's
        happening, much like what we were blasted with around the late '00s to
        early '10s. Harry wants to celebrate life and literally anything he does
        gives him joy, from waking up and breathing to hanging out with friends
        to even missing the bus.
      </p>
      <p>
        The song has many cliches that would bother some people. That "Wooh!"
        and then the horns play those truimphant "ba ba baahs" and also the
        "hands up/right here right now/we're celebrating", there's no deep
        diving lyric studying needed. I'm fine with that. Harry wants some joy
        without thinking too hard about it.
      </p>
      <p>
        I try to look more into the singer's biography, but there's nothing more
        besides his other released EPs. Judging by his name, I'd assume this
        person's Indonesian, but I'm probably wrong. I mean, we don't even get
        to see the person's face anywhere. He definitely hasn't gone and done
        any interviews either.
      </p>
      <p>
        I wish Harry here good luck and I'm grateful to have clicked on this
        song. It's a good pick-me-up for some positive energy.
      </p>
    </MusicArticleFormat>
  );
}
