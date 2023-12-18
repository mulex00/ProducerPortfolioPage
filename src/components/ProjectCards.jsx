import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const CardItem = (props) => {
  return (
    <motion.div variants={projectVariant} className="">
      <div className="border-2 border-border-color rounded-xl bg-[var(--secondary-color)] flex flex-col justify-center items-center text-center xs:mb-4 mb-5 md:mb-0">
        <div className="rounded-t-xl overflow-hidden w-full h-full relative">
          <img
            onClick={props.onClick}
            className="flex hover:scale-125 transition-transform duration-500"
            width="100%"
            height="100%"
            alt={props.alt}
            src={props.src}
          />
          {props.links}
        </div>
        <div className="sm:h-[125px] pt-[15px]" onClick={props.onClick}>
          <p className="text-lg text-center font-rubik font-semibold px-[15px]">
            {props.text}
          </p>
          <p className="mt-2 text-center px-[15px]">
            {props.projectDescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCards = ({songs, artists, setIsPlaying, setCurrentSong, setCurrentArtist, setTrackIndex}) => {
  const { t } = useTranslation();
  const releases = t("releases", { returnObjects: true });

  const handleCardClick = (index) => {
    setCurrentSong(songs[index])
    setCurrentArtist(artists[index])
    setTrackIndex(index)
    setIsPlaying(true)
  }

  return (
    <section id="releases" className="pt-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-rubik font-semibold text-4xl">{releases[0]}</p>
          <div className="flex justify-center"></div>
        </div>
        <p className="mt-6 mb-12">{releases[1]}</p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          
          {/* ROW 1 */}
          <CardItem
            text={songs[0]}
            src="/assets/coverartsweb/My Hope (teaser).jpg"
            alt="My Hope"
            onClick={()=>handleCardClick(0)}
            links={
              <div>
                <a
                  href="https://ffm.to/lypk9e5"
                  target="_blank"
                  className="absolute top-[8px] right-[8px]"
                >
                  <button className="p-5 border-2 border-border-color rounded-full font-semibold hover:bg-text-secondary-color hover:text-btn-text-hover transition duration-500 sm:border-white">
                  Pre-Save
                </button>
                </a>
              </div>
            }
            projectDescription={artists[0]}
          />
          <CardItem
            text={songs[1]}
            src="/assets/coverartsweb/Paradise.jpg"
            alt="Paradise"
            onClick={()=>handleCardClick(1)}
            links={
              <div>
                <a
                  href="https://open.spotify.com/album/0m7gESKiUU2NHFeEgckxgs"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-green-500 hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="ParadiseSpotifyLink"
                    src="/assets/logos/spotify.png"
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Q1GRxrgqMFU"
                  target="_blank"
                  className="absolute right-[68px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="ParadiseYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[1]}
          />
          <CardItem
            text={songs[2]}
            src="/assets/coverartsweb/Move On.jpg"
            alt="MoveOn"
            onClick={()=>handleCardClick(2)}
            links={
              <div>
                <a
                  href="https://open.spotify.com/album/2FSjQ1ArI8fk4RzUoYDSoU"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-green-500 hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="MoveOnSpotifyLink"
                    src="/assets/logos/spotify.png"
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=sZeB5JIOkko"
                  target="_blank"
                  className="absolute right-[68px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="MoveOnYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[2]}
          />
          <CardItem
            text={songs[3]}
            src="/assets/coverartsweb/I'm Good (MVLLER Remix).jpg"
            alt="ImGoodRemix"
            onClick={()=>handleCardClick(3)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=G5p0G44StvA"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="ImGoodYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[3]}
          />
          <CardItem
            text={songs[4]}
            src="/assets/coverartsweb/she's all i wanna be (MVLLER Remix).jpg"
            alt="ShesAllIWannaBeRemix"
            onClick={()=>handleCardClick(4)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=poawnE4wExo"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="ShesAllIWannaBeYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[4]}
          />

          {/* ROW 2 */}
          <CardItem
            text={songs[5]}
            src="/assets/coverartsweb/abcdefu (MVLLER Remix).jpg"
            alt="abcdefuRemix"
            onClick={()=>handleCardClick(5)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=4ZhaQ8leXhs"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="abcdefurYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[5]}
          />
          <CardItem
            text={songs[6]}
            src="/assets/coverartsweb/Moth To A Flame (MVLLER Remix).jpg"
            alt="MothToAFlameRemix"
            onClick={()=>handleCardClick(6)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=Zy0IPcVM218"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="MothToAFlameYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[6]}
          />
          <CardItem
            text={songs[7]}
            src="/assets/coverartsweb/Pink Soldiers (MVLLER Remix).jpg"
            alt="SquidGamesPinkSoldiersRemix"
            onClick={()=>handleCardClick(7)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=yzpBAnoz_SY"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="SquidGamePinkSoldieroutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[7]}
          />
          <CardItem
            text={songs[8]}
            src="/assets/coverartsweb/All On Me (MVLLER's Future Rave Remix).jpg"
            alt="AllOnMeRemix"
            onClick={()=>handleCardClick(8)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=TXtVpOWqDp0"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="AllOnMeYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[8]}
          />

          {/* ROW 3 */}
          <CardItem
            text={songs[9]}
            src="/assets/coverartsweb/Unbreakable (MVLLER's Future Rave Remix).jpg"
            alt="UnbreakableRemix"
            onClick={()=>handleCardClick(9)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=pVAw0G15nOg"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="UnbreakableYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[9]}
          />
          <CardItem
            text={songs[10]}
            src="/assets/coverartsweb/Party In The 90's.jpg"
            alt="PartyInThe90s"
            onClick={()=>handleCardClick(10)}
            links={
              <div>
                <a
                  href="https://open.spotify.com/album/3ZFJcm7KqhAVSqC3LQvD5J"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-green-500 hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="PartyInThe90sSpotifyLink"
                    src="/assets/logos/spotify.png"
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=pOF3KDDAVz0"
                  target="_blank"
                  className="absolute right-[68px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="PartyInThe90sYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[10]}
          />
          <CardItem
            text={songs[11]}
            src="/assets/coverartsweb/Rave Addiction.jpg"
            alt="RaveAddiction"
            onClick={()=>handleCardClick(11)}
            links={
              <div>
                <a
                  href="https://open.spotify.com/album/1vS4kjCYb51fO67Qz7TXoE"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-green-500 hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="RaveAddictionSpotifyLink"
                    src="/assets/logos/spotify.png"
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=YcE5u0AzcIo"
                  target="_blank"
                  className="absolute right-[68px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="RaveAddictionYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[11]}
          />
          <CardItem
            text={songs[12]}
            src="/assets/coverartsweb/Daddy Cool (MVLLER Remix).jpg"
            alt="DaddyCool"
            onClick={()=>handleCardClick(12)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=N8ok2h5qoyM"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="DaddyCoolYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[12]}
          />

          {/* ROW 4 */}
          <CardItem
            text={songs[13]}
            src="/assets/coverartsweb/Thunderstorm.jpg"
            alt="Thunderstorm"
            onClick={()=>handleCardClick(13)}
            links={
              <div>
                <a
                  href="https://open.spotify.com/album/3lHLvvhIrS6Ufis40TXWYS"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-green-500 hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="ThunderstormSpotifyLink"
                    src="/assets/logos/spotify.png"
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=tWKspXsIPTI"
                  target="_blank"
                  className="absolute right-[68px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="ThunderstormYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[13]}
          />
          <CardItem
            text={songs[14]}
            src="/assets/coverartsweb/Freedom.jpg"
            alt="Freedom"
            onClick={()=>handleCardClick(14)}
            links={
              <div>
                <a
                  href="https://open.spotify.com/album/4VrbQ9nbEXlFQShGyJ5MZU"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-green-500 hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="FreedomSpotifyLink"
                    src="/assets/logos/spotify.png"
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=CG2LztcJwDA"
                  target="_blank"
                  className="absolute right-[68px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="FreedomYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[14]}
          />
          <CardItem
            text={songs[15]}
            src="/assets/coverartsweb/Imagine.jpg"
            alt="Imagine"
            onClick={()=>handleCardClick(15)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=NJrUAq_8QSk"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="ImagineYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[15]}
          />
          <CardItem
            text={songs[16]}
            src="/assets/coverartsweb/Messy (Müller Remix).jpg"
            alt="MessyRemix"
            onClick={()=>handleCardClick(16)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=1MqstpKB9RU"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="MessyYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[16]}
          />

          {/* ROW 5 */}
          <CardItem
            text={songs[17]}
            src="/assets/coverartsweb/Tell Me You Love Me (Müller Remix).jpg"
            alt="TellMeYouLoveMeRemix"
            onClick={()=>handleCardClick(17)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=EqL5n8Z6Kd0"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="TellMeYouLoveMeYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[17]}
          />
          <CardItem
            text={songs[18]}
            src="/assets/coverartsweb/Ain't Nobody Got Time For That (Müller Remix).jpg"
            alt="AintNobodyGotTimeForThatRemix"
            onClick={()=>handleCardClick(18)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=cXp0M6LqdXE"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="AintNobodyGotTimeForThatYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[18]}
          />
          <CardItem
            text={songs[19]}
            src="/assets/coverartsweb/Without You (Müller Remix).jpg"
            alt="WithoutYouRemix"
            onClick={()=>handleCardClick(19)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=3nEqICnmKfQ"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="WithoutYouYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[19]}
          />
          <CardItem
            text={songs[20]}
            src="/assets/coverartsweb/Memories.jpg"
            alt="Memories"
            onClick={()=>handleCardClick(20)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=zOTWBtjKDsk"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="MemoriesYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[20]}
          />

          {/* ROW 6 */}
          <CardItem
            text={songs[21]}
            src="/assets/coverartsweb/Planet.jpg"
            alt="Planet"
            onClick={()=>handleCardClick(21)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=5C0FA6pmfkg"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="PlanetYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[21]}
          />
          <CardItem
            text={songs[22]}
            src="/assets/coverartsweb/XP.jpg"
            alt="XP"
            onClick={()=>handleCardClick(22)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=_itKhlC9w38"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="XPYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[22]}
          />
          <CardItem
            text={songs[23]}
            src="/assets/coverartsweb/Just Smile.jpg"
            alt="JustSmile"
            onClick={()=>handleCardClick(23)}
            links={
              <div>
                <a
                  href="https://www.youtube.com/watch?v=xQuJZcbuN74"
                  target="_blank"
                  className="absolute right-[8px] top-[8px] bg-white rounded-full hover:bg-red hover:scale-125 transition-transform duration-500"
                >
                  <img
                    width="50px"
                    alt="JustSmileYoutube"
                    src="/assets/logos/youtube.png"
                  />
                </a>
              </div>
            }
            projectDescription={artists[23]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
