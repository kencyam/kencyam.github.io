import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import "/src/App.css";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="I Will Always Love You - Dolly Parton"
      datePublished="September 11, 2026"
      tag={[MusicTags.SinglesReviews]}
      isFinished={true}
    >
      <iframe src="https://www.youtube.com/embed/lKsQR72HY0s" />

      <p>
        With the passing of beloved icon Dolly Parton, may she rest in peace,
        her biggest hits have returned to the charts. Her previously iconic
        charting songs include "Jolene" at 16, "9 to 5" at 18, "Islands in the
        Stream" with Kenny Rogers at 26, and "Here You Come Again" at 44.
      </p>
      <p>
        Surprisingly, this also includes one song that debuted at 27: her "I
        Will Always Love You", made most famous by Whitney Houston.
      </p>
      <p>
        It surprises me that such a classic song did not chart, so I looked into
        it, and it turns out there's multiple versions of this song to chart.
        The previous highest charting version was the 1982 version for her
        movie, "The Best Little Whorehouse in Texas" peaked at 53. She also had
        other versions with special guest singers such as Vince Gill and Kristen
        Chenoweth. This one that's being credited now is her original 1974
        version.
      </p>
      <p>
        That out of the way, I honestly have never heard her version of this
        song in its entirety, and to make up for such ignorance, I listened to
        it now.
      </p>
      <p>
        Immediately, I see Dolly's version is so adorably meek, yet still
        powerfully in love. The softness in the instruments with the steel
        guitars and the light taps of the drums, all of it is so docile
        complementing Dolly's vocals. With Whitney's version, you can tell the
        power in her voice from the start even as she whispers before the
        instruments come in. Whitney while sad, is still holding her head up
        high because she's a powerful woman who can keep going to seek even
        higher potentials. Not Dolly. A month before, Dolly recorded "Jolene".
        She has been accepting the pain for a while, and there's no confidence
        that there will be another man like him. It was inevitable, and that
        homewrecker Jolene really did take Dolly's man, and this is her
        accepting defeat in the saddest way.
      </p>
      <p>
        The spoken word in the middle of Dolly's version is so sincere. She
        doesn't have a hating bone in her body, even though she's being wronged
        by her man and Jolene. There's no "bless your heart" tone uttered in the
        song, and she's fighting that sarcastic "Southern hospitality"
        stereotype admirably. Any other country singer sings this, and I would
        definitely feel the spite.
      </p>
      <p>
        The final chorus, instead of Whitney's last boom of professing clear
        love while saying goodbye, Dolly continues to be her timid self, and
        it's so heart-wrenching to listen to. Nothing builds at all. She's just
        saying goodbye because it's truly goodbye. One last reminder for the
        man, but it's probably falling on deaf ears. He's already walked away
        too far. It's a song for her own ears at this point.
      </p>
      <p>
        Such a beautiful song. Different from what I'm used to, but both
        Whitney's and Dolly's versions are equally amazing in their own right.
        I'm glad we as a country adored her life and work, both musically and
        philanthropically (at least most of us. There's a subsect of America
        who's pretending they've always liked her despite the loud backlash they
        threw when she supported BLM and getting vaccinated for COVID. Those
        guys continue with their culture war and pretending she was purely
        apolitical). May Dolly continue to be beloved and remembered.
      </p>
    </MusicArticleFormat>
  );
}
