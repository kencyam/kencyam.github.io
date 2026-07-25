import MusicArticleFormat from "../../MusicArticleFormat";
import { MusicTags } from "../../../../assets/enums";
import "/src/App.css";
import albumImage from "/src/components/music-blog/music-articles-images/yspsfagsil.png";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="Olivia Rodrigo - You Seem Pretty Sad for a Girl So in Love"
      datePublished="July 13, 2026"
      tag={[MusicTags.AlbumReviews]}
      isFinished={false}
    >
      <img
        className="center-body"
        src={albumImage}
        alt="Olivia Rodrigo - You Seem Pretty Sad for a Girl So in Love album image"
      />
      <p>
        Pop star Olivia Rodrigo has released her third album. She continues her
        conquest with great success as of this week are her songs in this album
        are still charting in the Billboard Top 100.
      </p>
      <p>
        A supposed concept album, Olivia explains that the first half of the
        album is her "Girl So in Love" section and the second half is the "You
        Seem Pretty Sad" aftermath.
      </p>
      <p>
        She starts off with her lead single "drop dead" which I've written about{" "}
        <a href="https://kencyam.github.io/#/musicblog/00003" target="_blank">
          here. So far, it's what we know that Olivia is in the beginnings of
          her infatuation of another man. It sets us up to want to know where
          this is going.
        </a>
        ,
      </p>
      <p>
        "stupid song". Funny the line starts with "New York City never seemed so
        blue" because they just won the NBA Championship for the first time in
        53 and they're popping off. Maybe it does add to it instead (or maybe
        she cannot see orange)
      </p>
      <p>
        "honeybee" it already kind of sounds like she's sad, but she's just too
        painfully in love. Lush strings
      </p>
      <p>
        "maggots for brains" she has blunty been brainrotted to only think and
        do anything for her boyfriend. She literally cannot function (or forgot
        how)
      </p>
      <p>"u + me = &lt;3"</p>
      <p>
        "my way" - who is this girl? This girl seems to only be acknowledged in
        this song only. Did she hallucinate this girl? Is she overly protective
        and paranoid that any other woman will take him? Is it the mom
        disapproving of her and his son? (That last one can't be true since the
        next song seems to be okay)
      </p>
      <p>
        "purple" kind of a weird and sudden change, she's purple and mixing
        together, but now she's all black? It's too much of a hard brake check.
        It has gotten somewhat better after a few listens, but the transition is
        too sudden
      </p>
      <p>
        "the cure" probably would have hit harder if she hinted before that she
        needed fixing. This sadness felt like it came out of nowhere and fast
      </p>
      <p>"begged"</p>
      <p>"what's wrong with me"</p>
      <p>"less"</p>
      <p>
        "expectations" hilarious whiplash of being suddenly happy (but maybe
        like a dying person suffering through terminal lucidity)
      </p>
      <p>cigarette smoke</p>
      <p>
        Summary and overall thoughts, talk about how she really takes
        inspiration from music before her time, but she kind of sounds too
        polished. Maybe some pacing or extra knowlege seems omitted
      </p>
      <p>Highlight Songs: "maggots for brains", "u + me = &lt;3"</p>
      <p>Lowlight Songs: "my way", "purple"</p>
      <p>Rating: &#128532; &#128077; 8.3/10</p>
    </MusicArticleFormat>
  );
}
