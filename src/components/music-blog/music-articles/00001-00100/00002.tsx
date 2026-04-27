import { Component } from "react";
import MusicArticleFormat from "../../MusicArticleFormat";
import MusicArticleBodyFormat from "../../MusicArticleBodyFormat";
import MusicArticleSongInfoFormat from "../../MusicArticleSongInfoFormat";
import { MusicTags } from "../../../../assets/enums";

export default function MusicArticle() {
  return (
    <MusicArticleFormat
      title="2025 Billboard Hit Songs I Disliked"
      datePublished="April 24, 2026"
      tag={[MusicTags.RankingLists]}
    >
      <p>
        Popular music in 2025 was disappointing. With so many carry-overs from
        the previous year and the refusal of anticipated artists to release
        anything, we saw either a lot of newer, less polished artists appear for
        the first time or the artists that no one awaits for pump out their
        product guised under "songs". People who follow closely claimed this has
        been one of the worst years of popular music history with no good songs,
        and to that I disagree. In my opinion, 2025 was fine. It's just the
        comedown from such a great previous year that compared to what we have
        now, it looks a lot worse. There were a lot of songs to be indifferent
        of, but not much that's truly abhorrent. That's why this list is a lot
        shorter than my favorite list. But the songs that did make my list, wow
        these songs are terrible.
      </p>
      {/*Nice To Meet You*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/9VbDkDALT7w"
          songTitle="Nice To Meet You"
          songArtist="Myles Smith"
          album="A Minute..."
          highestChartingPos={73}
          weeksOnChart={18}
          year="2025"
        >
          <p>
            Myles Smith jumped into the spotlight with his song{" "}
            <a
              href="https://www.youtube.com/watch?v=9p9EauIOPm8"
              target="_blank"
            >
              "Stargazing"
            </a>
            , which I found to be a pleasant, uplifting listen that doesn't get
            worse from overplay. The songs that came after though did not meet
            the mark, and one that charted, "Nice To Meet You", soured rather
            quickly. From the start, the melody already makes my hair stand tall
            because he immediately goes too loud and forceful in my ears. (Not
            great for a first impression you know?) The chorus that follows is
            way too basic even for me, and I expect pop songs to be widely
            accessible. "Dance all night, we could dance 'til the morning light"
            -- It's a little too hack-y for my tastes. I would not be swooned
            into a further conversation.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Whim Whamiee*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/J-jCnsJEAFs"
          songTitle="Whim Whamiee"
          songArtist="PLUTO & YKNIECE"
          album="Both Ways"
          highestChartingPos={51}
          weeksOnChart={16}
          year="2025"
        >
          <p>
            It feels a little wrong for me to put this on this list. These gals
            look like they all had fun with this one, but I have to be honest
            with myself. I can see that they were going for a Sexyy Red style
            here, but in practice, the flow is awkward and the lyric choices are
            bewilderingly weird. The line "We forever gettin' money. You forever
            gonna be mad" stands out in particular since that second sentence
            felt like she had to cram everything in there. She could have just
            used the word "gettin'" again to fit the flow. On top of that,
            PLUTO's voice on the chorus is annoying (but I'm guessing her
            inflections are that way on purpose to dunk on her ex. I understand
            it, but it doesn't really make it listenable). I will say, YKNIECE's
            part was actually decent, but unfortunately it doesn't make up for
            the rest of the song. If I wanted to listen to some trashy rap where
            the girl frees herself from a crappy boyfriend, I would go to{" "}
            <a
              href="https://www.youtube.com/watch?v=ww6ykF2ktaI"
              target="_blank"
            >
              GloRilla's "F.N.F."
            </a>{" "}
            before Whim Whamiee.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Just Keep Watching*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/dpvQqmX6SUI"
          songTitle="Just Keep Watching"
          songArtist="Tate McRae"
          album="F1 the Album"
          highestChartingPos={33}
          weeksOnChart={19}
          year="2025"
        >
          <p>
            I guess after her pure pop phase, she's now doing a bunch of low-key
            sultry club songs. I am not a fan of this move at all, but I guess
            her sex appeal is what's selling at the moment with all these music
            videos of her in revealing clothes bending in all the ways that
            would put most of us in the emergency room. This is probably the one
            song that I actually have a strong negative feeling towards. It
            feels like it's ripping off{" "}
            <a
              href="https://www.youtube.com/watch?v=Oai1V7kaFBk"
              target="_blank"
            >
              Sisqo's "Thong Song"
            </a>
            , but Sisqo actually had fun and doubled down on his silliness and
            emotion the longer his song ran. Tate here just doesn't sound like
            she's into it the entire time. The outcome is a repetitive groove
            that's neither fun nor seductive. It's more of a pounding mild
            headache where you can keep going on with your day, but you really
            wish you had some pain medication right now.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Superman*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/RP9jj-6ufjY"
          songTitle="Superman"
          songArtist="Morgan Wallen"
          album="I'm The Problem"
          highestChartingPos={8}
          weeksOnChart={17}
          billboardYearEndRank={99}
          year="2025"
        >
          <p>
            Morgan dropped another gargantuan album with lots of charting
            success again. Too bad a lot of those songs aren't good.
          </p>
          <p>
            This song on paper is sweet. He's telling his young son that when he
            grows older, he'll find old news of Morgan in a bad light, and at
            least in the song, Morgan owns up to it and confesses that he made a
            bad mistake. He started drinking less due to that racist outburst he
            had in 2021. It might be a great song that airs out his faults, but
            there's one problem: he didn't learn from it. Morgan has broken his
            sobriety a few times and is still behaving like a reckless child. He
            still endangers others, and he still playfully hints at his unironic
            prejudiced behavior. Artists such as Hayley Williams have called him
            out years after he pledged to better himself, and Morgan hasn't
            apologized since. The racism is there, he just knows how to hide it
            better for the money.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Wi$h Li$t*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/V18gwYHktAU"
          songTitle="Wi$h Li$t"
          songArtist="Taylor Swift"
          album="The Life of a Showgirl"
          highestChartingPos={6}
          weeksOnChart={1}
          year="2025"
        >
          <p>
            The whole album was a disappointment. A very cringe-worthy, not in
            an alluring or charismatic way at all, disappointment. This one was
            full of words I do not want to hear Taylor say at all. Her staccato
            "rap" flow and contrasting "smooth" singing in "Wi$h Li$t" sounds
            exactly what I think an out-of-touch middle-aged woman thinks is
            "hip". She lists all these luxuries that people want, but in the
            end, she really just wants you (aka her husband). She of course
            tacks on some comments about others when it should be a one-on-one
            song to her lover, but her ego needs to somehow add a billionaire
            victim complex to a love song. It's gross and hypocritical since in
            real life, she's actually really making her love life public, and I
            sincerely hope she returns to form like her previous albums such as
            1989 or Red, but I guess we'll see.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Wildflower*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/l08Zw-RY__Q"
          songTitle="Wildflower"
          songArtist="Billie Eilish"
          album="Hit Me Hard and Soft"
          highestChartingPos={25}
          weeksOnChart={48}
          billboardYearEndRank={26}
          cumulativeWeeksOnChart={69}
          cumulativeHighestChartingPos={17}
          previousBillboardYearEndRank={89}
          year="2025"
          previousBillboardYearEndYear="2024"
        >
          <p>
            Billie Eilish's most trite song she ever wrote. It's not something I
            ever thought I'd describe her, but this one really shone. The lyrics
            are incredibly lame. I thought that Billie was better than to rhyme
            "girl" with "world", "fall apart" with "your heart", "shoulder" with
            "hold her" (all before the chorus). True, her{" "}
            <a
              href="https://www.youtube.com/watch?v=V9PVRfjEBTI"
              target="_blank"
            >
              "Birds of a Feather"
            </a>{" "}
            song also had some too-easy rhymes, but the song was also mixed
            subtly creepy lyrics that at make me feel some interesting emotions.
            The tempo here is boringly slow, and combined with an uninteresting
            stripped down acoustic guitar melody, I'd be tapping my fingers
            waiting for the song to end.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*20 Cigarettes*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/pCv0oP9JLKw"
          songTitle="20 Cigarettes"
          songArtist="Morgan Wallen"
          album="I'm The Problem"
          highestChartingPos={20}
          weeksOnChart={21}
          billboardYearEndRank={90}
          year="2025"
        >
          <p>
            This was supposed to be a story song of a one-night stand, but it
            was so uneventful that I really could not care. In fact, I honestly
            wished Morgan didn't tell me about it because I felt my time was
            being wasted. To Morgan, it seemed like a great night, but really he
            already wrote many one-night stand songs, and they were all more
            moving than this (e.g.{" "}
            <a
              href="https://www.youtube.com/watch?v=7pnlOJl1m78"
              target="_blank"
            >
              "Sand In By Boots"
            </a>
            ). Twenty cigarettes were used in that one night, which honestly is
            a crazy amount to go through in a couple hours even if you both were
            sharing them.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Free*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/fjOeJssZX_Q"
          songTitle="Free"
          songArtist="Ejae and Andrew Choi"
          album="KPop Demon Hunters"
          highestChartingPos={23}
          weeksOnChart={15}
          billboardYearEndRank={92}
          year="2025"
        >
          <p>
            I am legitimately shocked at how many people liked this KPop Demon
            Hunters song, with a sizeable amount people stating that it's their
            favorite soundtrack song. This song in the movie was about the
            protagonist and the antagonist getting "close" to each other and
            deciding to work together, but there was no chemistry at all. They
            talked to each other before like two teens who don't know how to
            communicate, so the song feels like more of a shoe-in than a real
            plan to fix their issues. Furthermore, imagine singing cathartically
            about feeling comforted from your mutual struggles and your duo
            starts rapping with the grace of a ham sandwich. Icing on the
            awkward cake. No wonder Jinu doesn't go along with working together
            after they depart.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Your Way's Better*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/T1LRsp8qBY0"
          songTitle="Your Way's Better"
          songArtist="Forrest Frank"
          album="Child of God II"
          highestChartingPos={61}
          weeksOnChart={22}
          year="2025"
        >
          <p>
            I'm not Christian, so many songs about Christianity kind of unnerve
            me with how in your face they are with the Jesus worship. If they
            believe it though, good for them. This one however, I don't feel any
            passion. I hear a grift. A grift on kids who like catchy melodies, a
            grift towards sheltered teens who don't know beyond their world
            view, a grift to make adults who are scared of today's music feel
            relieved to be able to listen to new songs. It's insincere pandering
            for the TikTok algorithms. I'm sorry, Forrest sounds more like he's
            trying to make money than spreading the word of God. In this song,
            he's telling the story of how he was "saved", but I don't believe
            Forrest even really fell out of God in the first place. He didn't
            search the world before finding Jesus. I think at most, he skipped
            church out of laziness. Aside from my conjecture, the melody is
            sparse but cute at least. It's catchy in the fact when I remember
            this song, the melody is now stuck in my head, and that's about it.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Timeless*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/5EpyN_6dqyk"
          songTitle="Timeless"
          songArtist="The Weeknd and Playboi Carti"
          album="Hurry Up Tomorrow"
          highestChartingPos={7}
          weeksOnChart={39}
          billboardYearEndRank={16}
          cumulativeWeeksOnChart={41}
          cumulativeHighestChartingPos={3}
          year="2025"
        >
          <p>Abel why...</p>
          <p>
            The Weeknd finished his trilogy with the album "Hurry Up Tomorrow",
            and with it came the songs that impressed me the least. Listening to
            the whole album, I couldn't even differentiate any of the tracks. It
            might as well have been one single 84-minute song. The lyrics had
            nothing to go for itself. It's self-aggrandizing telling the
            audience Abel and Carti are proud sex gods that don't need
            relationships. It's not appealing post-The Idol. Along with the
            lyrics sucking, the words themselves sound terrible. The whole song
            is a cacophony of the most displeasing phonics to hear in pop music.
            The way words are emphasized actually hurts my head. "Ever since I
            was a JIT, I been LE<b>GIT</b>"/"If I was you, I would cut up my{" "}
            <b>WRIST</b>". It makes me want to hold my breath bracing for their
            mouth noises.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Die Trying*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/b5bR2NqDpqI"
          songTitle="Die Trying"
          songArtist="PARTYNEXTDOOR, Drake & Yebba"
          album="$ome $exy $ongs 4 U"
          highestChartingPos={21}
          weeksOnChart={12}
          year="2025"
        >
          <p>
            This song makes me smirk like a smug idiot. Drake and PARTYNEXTDOOR
            reached high school kid writing songs for the first time lyrics.
            Just play the video above and listen to that first verse and tell me
            that you don't imagine a 14-year old playing the first song he ever
            wrote on an acoustic guitar. I don't even know what to write about
            this entry, but at least I can say it didn't anger or bore me.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Sparks*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/Ar48yzjn1PE"
          songTitle="Sparks"
          songArtist="Coldplay"
          album="Parachutes"
          highestChartingPos={77}
          weeksOnChart={13}
          year="2025"
        >
          <p>
            TikTok really chooses the most random songs to revive and chart.
            Sometimes they're great, but most of the time, like this entry,
            they're confoundingly disappointing. They really dug deep with this
            one, choosing a random song from Coldplay's first album. I just
            don't get it. The lyrics are confusing. What did he do? How did you
            drive her away? Is this song a metaphor for sex? It's not sensual.
            Is the feeling unreciprocated? He's seeing "sparks". I'm not seeing
            anything.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Rather Lie*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/fYD7YsSRHOY"
          songTitle="Rather Lie"
          songArtist="Playboi Carti and the Weeknd"
          album="Music"
          highestChartingPos={4}
          weeksOnChart={23}
          year="2025"
        >
          <p>
            I don't think The Weeknd and Carti even communicated with each other
            on this one. The Weeknd here is suffering from success being so
            good, he has to lie (for what reason?) to his girl for fear of
            losing her (again for what reason?). Whenever it's handed off to
            Carti, he sings about how good he is at sex and how rich he is, and
            it's just handed back and forth. Zero cohesion.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Anxiety*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/riCP9x31Kuk"
          songTitle="Anxiety"
          songArtist="Doechii"
          album="Alligator Bites Never Heal (Extended)"
          highestChartingPos={9}
          weeksOnChart={20}
          billboardYearEndRank={39}
          year="2025"
        >
          <p>
            This one was unfortunate. In 2019, Doechii recorded Anxiety for a
            mixtape. It was an amateur freestyle using the instrumentals of{" "}
            <a
              href="https://www.youtube.com/watch?v=8UVNT4wvIGY"
              target="_blank"
            >
              Gotye's "Somebody That I Used To Know"
            </a>
            . It wasn't great, but it was novel, and she was definitely showing
            some promise. Fast forward to 2025, TikTok decides to bring it back,
            and it got so popular, she decided to add it to her new mixtape
            that's been blowing up. Now it pissed many, many people off because
            people hoped to get Gotye when those xylophone notes play, and
            instead they get Doechii's peeving rap. Tragically, I agree with
            them, but it's a little unfair since "Somebody That I Used To Know"
            is a really great song, and Doechii would have to climb a mountain
            to compare to that legendary song, but sadly it's hard to not bring
            up the comparison. And what's worse is the lyrics are terrible and
            does not reward any replayability. Sure her flow is great, but when
            you give us lyrics like "Okay, next thing, my life is a wet dream I
            call it a sex scene, the back is a nice tease I tried to escape, my
            life is a X-rate I'm sorry, a sex tape, you only get one take", it
            doesn't really matter how strong you are as a vocalist. And it's
            really a shame this song brought her down because her other songs on
            her mixtape, like{" "}
            <a
              href="https://www.youtube.com/watch?v=F0cdbR5ognY"
              target="_blank"
            >
              "Denial Is A River"
            </a>{" "}
            were tarnished and her deserved flowers are being torn by the
            general audience. All because of this stupid song.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Love Somebody*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/krRYW-kwstk"
          songTitle="Love Somebody"
          songArtist="Morgan Wallen"
          album="I'm The Problem"
          highestChartingPos={1}
          weeksOnChart={45}
          billboardYearEndRank={11}
          year="2025"
        >
          <p>
            Honestly, I put this one this low because I don't think he's capable
            of mutual love. The album name is right there, but basically it's
            ironic and the album's full of him blaming others while barely
            working on bettering himself. If anything, it made me side with his
            exes. I know they all definitely tried, but they all respect
            themselves and know that he cannot be fixed. There's obviously a
            trend here. He'll get the money and the fame and the praise though
            because he's the star that people want to listen to.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Loco*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/z7-bDzJbtis"
          songTitle="Loco"
          songArtist="Neton Vega"
          album=""
          highestChartingPos={43}
          weeksOnChart={20}
          billboardYearEndRank={100}
          year="2025"
        >
          <p>
            This song's here for the incompetence. I don't even know how he
            wants to present himself. Is he a sex mastermind or is he a lonely
            boy? You're certain that you'll take her, but the first lines have
            you saying that you don't know much to begin with. This kid is not
            smooth at all. He's being painfully embarrassing hyping himself up
            with recreational drugs and saying that "no" is not an answer for
            her. It's not a fun listen.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Peekaboo*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/cbHkzwa0QmM"
          songTitle="Peekaboo"
          songArtist="Kendrick Lamar"
          album="GNX"
          highestChartingPos={13}
          weeksOnChart={32}
          billboardYearEndRank={53}
          year="2025"
        >
          <p>
            Treasonous to put Kendrick in a list like this, especially this low,
            but I really did not enjoy this single. Kendrick lost his mind, not
            as an egotistical genius, but like a schizophrenic homeless man who
            won't leave you alone in the subway. Kendrick here will not let go
            of Drake and other fake rappers in this one, freaking them out and
            trying to be their boogeyman. I don't feel that many of these lines
            are even relevant. He makes himself eccentric with many repeating
            offbeat refrains so other listeners can justify his lines. And
            Genius.com seems to be as deranged with its annotations as Kendrick
            because they're really throwing in some reaching explanations for
            lines, all in the sake of boosting Kendrick's percieved intellect. I
            understand that art can have multiple interpretations, which makes
            art art, but looking at people's comments, you'd think every line is
            a quintuple entendre with how many people keep trying to defend
            every word. It just feels like pretentiousness was the real main
            goal of this song.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*What Did I Miss?*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/weU76DGHKU0"
          songTitle="What Did I Miss?"
          songArtist="Drake"
          album="Iceman"
          highestChartingPos={2}
          weeksOnChart={12}
          year="2025"
        >
          <p>Are you for real Drake?</p>
          <p>
            You know what you "missed". You cannot brush off the pedophile
            accusations. You can't just say it was just nothing. Your accuser
            went off to the Superbowl where he sang it again to the audience of
            millions. Your friends switched up on you because of how terrible
            you handled it with{" "}
            <a
              href="https://www.youtube.com/watch?v=HJeY-FXidDQ"
              target="_blank"
            >
              "The Heart Part 6"
            </a>{" "}
            and then following it with songs like{" "}
            <a
              href="https://www.youtube.com/watch?v=YRtyGtjgcNo"
              target="_blank"
            >
              "Wah Gwan Delilah"
            </a>{" "}
            (which honestly I begrudgingly enjoyed due to how my eyes popped out
            of my sockets from the shock on first listen).
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Are You Even Real?*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/XkS0n9n6Uyo"
          songTitle="Are You Even Real?"
          songArtist="Teddy Swims & GIVEON"
          album="I've Tried Everything but Therapy (Part 2)"
          highestChartingPos={59}
          weeksOnChart={14}
          year="2025"
        >
          <p>
            The song sounds so uncomplementary. The beat and their singing don't
            even sound like they belong together. It feels like it just so
            happens both tracks are playing at the same time and they have the
            same BPM. It's really falls apart during the chorus. The "Are
            YOU?"'s are really clumsy. It makes me want to shut it off. No way
            both artists thought that was okay to release, much less be
            single-worthy.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Residuals*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/46p-IxAVJ74"
          songTitle="Residuals"
          songArtist="Chris Brown"
          album="11:11"
          highestChartingPos={40}
          weeksOnChart={29}
          billboardYearEndRank={63}
          cumulativeWeeksOnChart={35}
          cumulativeHighestChartingPos={40}
          year="2025"
        >
          <p>
            I'm really surprised Chris Brown is still a hitmaker even in the
            2020s. I guess any drama from his reckless behavior spanning from
            drunk driving all the way to domestic abuse does not make a dent to
            his stardom. His fans will boost any of his songs, even this one,
            one of the worst he's ever done in his entire career. People are
            just being tricked here. He calls his love "residuals", which is one
            of the worst comparisons ever. Why call romantic love leftovers? Why
            do you even have a limit? Chris here sees love as a one-way
            financial transaction from old monetary values instead of something
            more mutual. And I guess if he runs out, then he'll resort into
            doing what he's always done even to this day: beating people.
            Absolutely disgusting.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Somebody Loves Me*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/NvU2OQPyq-8"
          songTitle="Somebody Loves Me"
          songArtist="PARTYNEXTDOOR, Drake & Cash Cobain"
          album="$ome $exy $ongs 4 U"
          highestChartingPos={27}
          weeksOnChart={22}
          billboardYearEndRank={85}
          year="2025"
        >
          <p>
            What a strange song. R&B without any smoothness or honesty. The cold
            auto-tune, wallowing pitiful lyrics, and dime-a-dozen beat
            meaninglessly intertwine to make me wonder if he just set AI to
            ghostwrite the most uninspired song. Drake just gave up on writing
            these one-way love songs that focus on him being lonely. We've seen
            it since the late 2000s and somehow with fifteen years of
            experience, he's learned nothing. The only bright side of this song
            existing is the dumb music video that comes with it, and even then
            they ran out of things to film because the outro with the album name
            splashing in multiple fonts goes on for way too long.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Abracadabra*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/vBynw9Isr28"
          songTitle="Abracadabra"
          songArtist="Lady Gaga"
          album="Mayhem"
          highestChartingPos={13}
          weeksOnChart={20}
          billboardYearEndRank={56}
          year="2025"
        >
          <p>
            This song is way too overbearing to the point it's unenjoyable. I
            hate the chanting in the chorus. Everything is rammed towards my
            face. Somehow she made it work in{" "}
            <a
              href="https://www.youtube.com/watch?v=qrO4YZeyl0I"
              target="_blank"
            >
              Bad Romance
            </a>
            , but here? Headache.{" "}
            <a
              href="https://www.youtube.com/watch?v=2Abk1jAONjw"
              target="_blank"
            >
              Just Dance
            </a>{" "}
            had Gaga tell us that we should dance to enjoy life before the world
            ends. In Abracadabra, she has a gun strapped to your head with her
            finger right on the trigger. In these current times, the last thing
            I want to do is be told to do something I don't want to do or die.
            The bridge with that drill sounding crescendo somehow adds another
            layer of pain. I know Gaga prides herself to be too much, but I
            personally have a limit, and she flat out jumped over it and flew to
            another galaxy.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*I'm The Problem*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/HwThuMZ80RA"
          songTitle="I'm The Problem"
          songArtist="Morgan Wallen"
          album="I'm The Problem"
          highestChartingPos={2}
          weeksOnChart={36}
          billboardYearEndRank={13}
          year="2025"
        >
          <p>
            Correct. Too bad you used this title as sarcasm to gaslight your
            wife into thinking that maybe it's her that's the problem.
            Absolutely evil.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Better Me For You (Brown Eyes)*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/0-jSotRMNL8"
          songTitle="Better Me For You (Brown Eyes)"
          songArtist="Max McNown"
          album="Night Diving"
          highestChartingPos={50}
          weeksOnChart={17}
          year="2025"
        >
          <p>
            Dude, all you just did was describe a typical Christian girl? Brown
            eyes? Strong? Likes to pray to Jesus? Come on... This is some
            hardcore country pandering. Machine Gun Kelly has done a similar
            thing with his song{" "}
            <a
              href="https://www.youtube.com/watch?v=yh_ydvIJAxg"
              target="_blank"
            >
              "Emo Girl"
            </a>
            , and music critic, Anthony Fantano, perfectly sums it up for both
            of them with this quote:{" "}
            <a
              href="https://youtu.be/j-YUq_dPBxc?si=JWzTUbd934pQRfRw&t=401"
              target="_blank"
            >
              "You're almost describing everything that breathes at this point!"
            </a>
            . The accompaniment instrumental to the lyrics are also offensively
            generic. The formula for pop country is in here, and I wish I didn't
            know this existed, much less get more popular in 2026.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*CANCELLED!*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/Gv5vLEDEtxk"
          songTitle="CANCELLED!"
          songArtist="Taylor Swift"
          album="The Life of a Showgirl"
          highestChartingPos={10}
          weeksOnChart={1}
          year="2025"
        >
          <p>
            Taylor are you twelve? The writing from your first album has more
            maturity than this embarrassment. It's another billionaire-victim
            complex song where she lists things that, to her mind, would shun
            her victimed friends away from the evil patriarchal society. As I
            look at the charts of 2026 and see that her songs are still very
            much being boosted by her capitalist fans, one even projected to be
            #1 of 2026, I cannot comprehend how this does not cause Taylor to
            shrivel up from cringe hypocracy. I guess the money just makes her
            ego powerful. Oh, and beside the terrible lyrics, that beat is high
            school theatre-kid level dark. Maybe even middle-school level. The
            grandeur you feel about yourself is causing all the haters to
            accumulate, not the other way around.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Blue Strips*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/aFpfY-EZwFo"
          songTitle="Blue Strips"
          songArtist="Jessie Murph"
          album="Sex Hysteria"
          highestChartingPos={15}
          weeksOnChart={22}
          billboardYearEndRank={52}
          year="2025"
        >
          <p>
            Out of all these songs I dislike, this one is the worst one on the
            basis of being purely terrible without making me angry or ruining my
            mood. Jessie seems confused on how to actually get revenge, and when
            she sings about her actions, it leaves the rest of us puzzled. You
            bought a mansion in Malibu? Why do you sound so sad when you mention
            that? You can't afford it? You threw ones at his new girlfriend?
            Singles aren't really offensive since money is money. Also are you
            throwing ones because you bankrupted yourself with that mansion
            purchase? And strip down all her wrongs? She's a stripper. I'm
            pretty sure everyone involved is aware of her occupation. It's like
            in King of the Hill where Peggy realizes Nancy is cheating on Dale,
            but every character already knew about it. And that instrumental.
            Empty sounding trap beats on empty sounding country synths: why? Is
            Jessie trying to be so trashy to make no one feel any remorse for
            her? Why does the song even exist then? It's baffling.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*Eldest Daughter*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/rhzMYDvgG2U"
          songTitle="Eldest Daughter"
          songArtist="Taylor Swift"
          album="The Life of a Showgirl"
          highestChartingPos={9}
          weeksOnChart={1}
          year="2025"
        >
          <p>
            This feels like stolen valor mis-defining the term "Eldest Daughter"
            so she can get her fans to believe that they're uniquely righteous
            just like Taylor. I've seen thousands of people falling for it and
            claiming that they're the spiritually chosen special few. It's
            pop-star ubermensch-ing. The superstar pied-pipering her young,
            impressionable fan base hurts to view in real time. Everyone's egos
            are growing dangerously and with their collective terminally online
            brain damage, they're in for the worst wake-up call in the near
            future.
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
      {/*I'm A Little Crazy*/}
      <MusicArticleBodyFormat>
        <MusicArticleSongInfoFormat
          videoOrImage="https://www.youtube.com/embed/q5kocH_Q7wA"
          songTitle="I'm A Little Crazy"
          songArtist="Morgan Wallen"
          album="I'm The Problem"
          highestChartingPos={17}
          weeksOnChart={17}
          year="2025"
        >
          <p>And my least favorite song of 2025...</p>
          <p>
            Morgan, you are very much part of the reason the world's insane. You
            don't get to act like you had no hand in it. Scream at the TV for
            the news and politics that you encourage but blame others for.
            Please, it'll totally convince everyone that you're not the problem.
            We'll all forgive you by making millions off of us (and sadly it's
            working).
          </p>
        </MusicArticleSongInfoFormat>
      </MusicArticleBodyFormat>
    </MusicArticleFormat>
  );
}
