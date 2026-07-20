import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import "/src/App.css";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="misery. - pupsies"
      datePublished="July 20, 2026"
      tag={[MusicTags.SinglesReviews]}
      isFinished={true}
    >
      <iframe src="https://www.youtube.com/embed/hXCIH5VTWyg" />

      <a
        href="https://soundcloud.com/pupsies/misery-prod-pupsies-elujjin"
        target="_blank"
      >
        Soundcloud link (her actual account. She has not posted on her Youtube
        page in years)
      </a>
      <p>Where did this come from?</p>
      <p>
        Last week, I saw this song debuting at number two in the Billboard
        Bubbling Under Chart (a chart that's basically a 25-song extension of
        the Billboard Top 100 with songs that have not appeared in the main
        chart. Songs ranked 101-125 in short). At this moment it's #80 on the
        actual Billboard 100 chart and projected to be around #60 next week.
      </p>
      <p>
        My ears perked up hearing this for the first time last week because I
        just never though a song like this would ever get mainstream success.
        It's classified as "hyperpop", but I'd put it more on the electronic,
        lo-fi, chiptune side of things. Basically a song that mid-2000s to early
        2010s tumbr-core teens would turn triple-platinum if they ever get a
        chart certifier.
      </p>
      <p>
        It didn't surprise me that it was once again, TikTok's reason this song
        gained momentum. The whole group bringing random songs from old to
        underground is a powerful tool, more often than not for worse, but
        always interesting.
      </p>
      <p>
        After the initial amusement and shock I experienced listening to this, I
        don't even know if I truly like this song or if I'm just happy that
        something different and something that I somewhat grew up with reached
        this level of popularity. For sure, I've definitely listened to better
        songs in this genre, and I am definitely not into the not-so-subtle
        suicidal tendency lyrics of pupsies (also that weird constant "only in
        the evening" line. I don't know what that means). I rolled my eyes back
        when I was almost the actual demographic in the late 2000s and I'm still
        the same today. Her singing is almost like she's crying (or laughing?
        maybe she's being sarcastic and doing the "XD I'm so crazy and random"
        schtick with adolescent irony). It's all confusing, but I think this is
        on purpose.
      </p>
      <p>
        And discussions online are very polarized towards this song. A big group
        of people do want to see it grow and flourish out of novelty, but many
        other, more mainstream-focused, people claim to hate this song from its
        lyrics to its production. I get both sides, but I feel both are wanting
        their outcome to happen for less-than-ideal reasons. Those who want to
        see this song succeed are happy to finally see something shake up from
        the stagnant last two years of pop music, but what the masses are
        throwing in is not the best. There are loads of other songs that can
        better represent this genre, and what outsiders will think is that it's
        all immature, suicidal music. And on the other hand, it seems the most
        vocally against this music are also gatekeepers of their own fandom and
        are angry that a song like this is stealing a spot from their own
        favorite artists. They got the excuse to hide their clique-like disdain
        behind the song's poor mixing.
      </p>
      <p>
        Aside from all that discussion, is this a one-off thing? Or could it
        break open the door for these bedroom-electronic, amateur-ish artists
        and bring in a totally interesting era of pop music? Maybe we will see
        more popular artists such as Renard or Living Tombstones break from
        their internet niche and shock the world living on the outside. It would
        be hilarious to see terminally-online young adults feel validated that
        they were just too early for the mainstream and all it too was Gen Z
        TikTok to latch onto it.
      </p>
      <p>
        Also if one wants to hear more of pupsies' songs, check their
        <a href="https://soundcloud.com/pupsies" target="_blank">
          Soundcloud
        </a>
        . It's all very lo-fi, and it seems "misery." is one of the better
        produced tracks of hers. If you like messy, EDM/Chiptune, hyperpop
        music, you'll like her. I hope her the best and that she continues her
        success.
      </p>
    </MusicArticleFormat>
  );
}
