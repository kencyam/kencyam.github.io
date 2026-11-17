import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import albumImage from "/src/components/music-blog/music-articles-images/2026christmassongsinnovember.png";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="Christmas Songs in November"
      datePublished="November 16, 2026"
      tag={[MusicTags.Rambles]}
      isFinished={true}
    >
      <img
        className="center-body"
        src={albumImage}
        alt="2026 November 14 Billboard chart image. Halloween and Christmas songs together."
      />
      <p>C'mon guys...</p>
      <p>
        I do get it. Christmas is a very cheery time. The holiday season peaks
        for most people then, so if we start it earlier, "logically", we get to
        enjoy the height of merriment longer. The dopamine levels shoot up, and
        we all celebrate.
      </p>
      <p>
        But seriously? Halloween just finished. Halloween songs are still
        charting. "Thriller" by Michael Jackson even got its new peak this week
        at number 2. (Which is blocked from number 1 right now by the
        mega-monolith, "Choosin' Texas" by Ella Langley.) We should not have two
        Christmas songs in the top 40 already.
      </p>
      <p>
        A couple weeks ago, Mariah Carey posted her annual "IT'S TIME!!!" video,
        and they've been funny. We all laugh, but it doesn't mean to stream it
        to the heavens immediately.
      </p>
      <iframe src="https://www.youtube.com/embed/2qIZ1A3P8po"></iframe>
      <p>
        In the video above, I was actually shocked that the punk singer was
        Mariah Carey. She looked so different under all that make up and punk
        streetwear. I don't think I've ever heard her sing that way either. It's
        usually ballad-like and fun or enchanting, not short and aggressive.
        When she hits that high note and everything shatters into Christmas, it
        threw me off in a fun way. I'm glad to see her having fun and being
        creative, despite the effects that her reappearance causes.
      </p>
      <p>
        The week after, I look at the charts and my heart dropped seeing the
        usual suspects appear much, much earlier than anticipated. There's Wham!
        with "Last Christmas" and the aforementioned Mariah Carey song. "Rockin'
        Around the Christmas Tree" is also coming, but not enough to chart as
        she didn't go over the recurrency rule just yet. I anticipate the next
        week to have at least another handful of classic songs to appear. Maybe
        Olivia Rodrigo's new Christmas song could also join them. She never had
        a song not chart before, and I believe this shouldn't be any different,
        despite the polarizing reception of it. (I am on the group that really
        likes it.)
      </p>
      <p>
        All I'm really trying to say is that please let the holidays get their
        own time. November is for Thanksgiving. Granted, there's no songs for
        that, but seeing other people already decorating and selling Christmas
        merchandise, we're really overlooking a holiday that allows us to eat
        great, unhealthy meals and laze around and hang out with people we like
        (unless it's those type of relative and friends, in which case I'm so
        sorry). We can at least wait until Black Friday for Christmas to show
        up, but alas the consumers want to consume the jolliness as soon as
        possible. I shouldn't be a buzzkill, but really, this is way too early
        for this.
      </p>
    </MusicArticleFormat>
  );
}
