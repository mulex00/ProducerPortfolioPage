import { useEffect, useRef, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import NewMusic from "./components/NewMusic";
import ProjectCards from "./components/ProjectCards";
import Contact from "./components/Contact";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import MusicPlayer from "./components/MusicPlayer";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "de", "hu"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/lang/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
//document.getElementById('output').innerHTML = i18next.t('key');

function App() {
  const isDesktop = useMediaQuery("(min-width: 1060px");
  const { t } = useTranslation();
  const trackname = ["My Hope (teaser)","Paradise","Move On","I'm Good (MVLLER Remix)","she's all i wanna be (MVLLER Remix)","abcdefu (MVLLER Remix)","Moth To A Flame (MVLLER Remix)","Pink Soldiers (MVLLER Remix)","All On Me (MVLLER's Future Rave Remix)","Unbreakable (MVLLER's Future Rave Remix)","Party In The 90's","Rave Addiction","Daddy Cool (MVLLER Remix)","Thunderstorm","Freedom","Imagine","Messy (Müller Remix)","Tell Me You Love Me (Müller Remix)","Ain't Nobody Got Time For That (Müller Remix)","Without You (Müller Remix)","Memories","Planet","XP","Just Smile"];
  const artistname = ["MVLLER","MVLLER, Kashwell, Melk","SEK Music Group, MVLLER, π, Dominika Ihász","David Guetta, Bebe Rexha, MVLLER","Tate McRae, MVLLER","GAYLE, MVLLER","Swedish House Mafia, The Weeknd, MVLLER","Squid Game, MVLLER","Tchami, ZHU, MVLLER","BUNT., Clarence Coffee Jr., MVLLER","MVLLER, BnD","MVLLER","Boney M, MVLLER","MVLLER","MVLLER","MVLLER","Kiara, Müller","Galantis, Throttle, Müller","Sweet Brown, Müller","Avicii, Müller","Müller","Müller","Müller","Müller"];
  const [trackIndex, setTrackIndex] = useState(0);
  const [artists, setArtists] = useState(artistname);
  const [songs, setSongs] = useState(trackname);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(trackname[trackIndex]);
  const [currentArtist, setCurrentArtist] = useState(artists[trackIndex]);
  const audioSrc = useRef();
  const [progress, setProgress] = useState(0);
  const [audioVolume, setAudioVolume] = useState(0.5);

  useEffect(() => {
    //Indjtás és szüneteltetés
    if (isPlaying) {
      audioSrc.current.play();
    } else {
      audioSrc.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    //Zene jelenlegi helyzete
    const duration = audioSrc.current.duration;
    const currentTime = audioSrc.current.currentTime;
    
    if(audioSrc.current.currentTime !=0){
    setProgress((currentTime / duration) * 100);
    }
    
    if (progress > 99) {
      //Utolsó zene és újrakezdés
      if (trackIndex == songs.length - 1) {
        setCurrentSong(songs[0]);
        setCurrentArtist(artists[0]);
        setTrackIndex(0);
        setProgress(0);
        setIsPlaying(true);
      } 
      //Következő zene
      else { 
        setCurrentSong(songs[trackIndex + 1]);
        setCurrentArtist(artists[trackIndex + 1]);
        setTrackIndex(trackIndex + 1);
        setProgress(0);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="app bg-background-color">
      <audio
        src={`/assets/tracks/${currentSong}.mp3`}
        ref={audioSrc}
        autoPlay={true}
        onTimeUpdate={onPlaying}
      ></audio>
      <Navbar />
      <MusicPlayer
        trackname={trackname}
        artists={artists}
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioSrc={audioSrc}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        currentArtist={currentArtist}
        setCurrentArtist={setCurrentArtist}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        progress={progress}
        setProgress={setProgress}
        audioVolume={audioVolume}
        setAudioVolume={setAudioVolume}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && <DotGroup />}
        <Landing />
        <NewMusic />
        <div className="w-5/6  mx-auto">
          <ProjectCards
            artists={artists}
            songs={songs}
            setTrackIndex={setTrackIndex}
            setCurrentSong={setCurrentSong}
            setCurrentArtist={setCurrentArtist}
            setIsPlaying={setIsPlaying}
          />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
