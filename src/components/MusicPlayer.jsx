import React, { useState } from 'react';
import useMediaQuery from "../hooks/useMediaQuery";

const MusicPlayer =({audioSrc, songs, artists, isPlaying, setIsPlaying, currentSong, setCurrentSong, currentArtist, setCurrentArtist, trackIndex, setTrackIndex, progress, setProgress, audioVolume, setAudioVolume})=> { 
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const PlayPauseMusic = ()=>
    {
        setIsPlaying(!isPlaying);
    }
    //Következő
    const nextTrack = () =>
    {
      if (trackIndex == songs.length-1){
        setCurrentSong(songs[0])
        setCurrentArtist(artists[0])
        setTrackIndex(0)
        setIsPlaying(true)
      }
      else
      {
        setCurrentSong(songs[trackIndex+1])
        setCurrentArtist(artists[trackIndex+1])
        setTrackIndex(trackIndex+1)
        setIsPlaying(true)
      }
    }
    //Előző
    const prevTrack = () =>
    {
      if (trackIndex == 0)
      {
        setCurrentSong(songs[songs.length-1])
        setCurrentArtist(artists[songs.length-1])
        setTrackIndex(songs.length-1)
        setIsPlaying(true)
      }
      else
      {
        setCurrentSong(songs[trackIndex-1])
        setCurrentArtist(artists[trackIndex-1])
        setTrackIndex(trackIndex-1)
        setIsPlaying(true)
      }
    }
    //Egy adott pont kiválasztása zenében
    const changeProgress = (e) =>
      { 
        audioSrc.current.currentTime = e.target.value*audioSrc.current.duration/100;
      }
    const changeVolume = (e) => 
    {
      setAudioVolume(e.target.value);
      audioSrc.current.volume = audioVolume;
    }  
  return (
    <div className="backdrop-filter z-40 backdrop-blur-xl w-full h-full fixed top-[85%] mx-auto">
        <div className="flex">
        <img className="ml-5 sm:ml-20 mt-5 sm:mt-3 rounded-xl w-[80px] sm:w-[120px]" src={`/assets/coverartsweb/${currentSong}.jpg`} alt="Coverart"/>
        <p className="ml-10 mt-3 font-rubik font-semibold text-base sm:text-xl">{currentSong}<br/><p className="font-rubik font-semibold text-sm sm:text-sm">{currentArtist}</p></p>
        <input className="absolute top-[-12px] w-full bg-secondary-color accent-text-secondary-color" type='range' step='0.01' min="0" max="98" value={progress} onChange={changeProgress}></input>
        <div className="absolute top-20 lg:top-16 flex items-center mx-[33%] sm:mx-auto w-full">
        <div className="flex justify-between sm:mx-auto gap-10 sm:gap-28">
          <i className="fa-solid fa-backward text-[32px] sm:hover:text-text-secondary-color" onClick={prevTrack}></i>
          {isPlaying ? <i className="fa-solid fa-pause text-[32px] sm:hover:text-text-secondary-color" onClick={PlayPauseMusic}></i>
          : <i className="fa-solid fa-play text-[32px] sm:hover:text-text-secondary-color" onClick={PlayPauseMusic}></i>}
          <i className="fa-solid fa-forward text-[32px] sm:hover:text-text-secondary-color" onClick={nextTrack}></i>
        </div>
        </div>
          <input className="absolute hidden sm:block top-14 right-[2%] mr-[5px] sm:right-20 -rotate-90 w-[100px] accent-text-secondary-color" step="0.01" min="0" max="1" value={audioVolume} onChange={changeVolume} type="range" />
        </div>
    </div>
  )
}

export default MusicPlayer