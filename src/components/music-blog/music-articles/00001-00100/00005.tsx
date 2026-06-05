import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="Miles Guo - Dance 7: The 'Hit Song' Removed By Billboard"
      datePublished="May 15, 2026"
      tag={[
        MusicTags.SinglesReviews,
        MusicTags.Artists,
        MusicTags.Retrospection,
      ]}
    >
      <p>
        Every so often, I'd browse Billboard's Top 100 site to see what's
        charting and see any cool things that would debut near the bottom. In
        2021, that would be Miles Guo's "Dance 7 Remix".
      </p>
      <p>
        "What the heck is this?" I say to myself. It's a song from a Chinese
        artist with no thumbnail. Was there a small TikTok craze for this guy?
      </p>
      <p>
        Turns out nope -- this is a billionaire that literally bought thousands
        of his own singles so he could chart. But why? Was he just bored? Did he
        just want to do a side hustle and give himself some kind of
        participation trophy? Let's see what this man has got in his resume...
      </p>
      <p>... Yikes...</p>
      <p>
        So this man seems to be very, <i>very</i> involved in Chinese politics,
        in so many corrupt and intrusive ways. From what I can see, it's helping
        no one but himself.
      </p>
    </MusicArticleFormat>
  );
}
