import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRedo, FaTachometerAlt } from 'react-icons/fa';

const AudioPlayer = ({ audioUrl }) => {
  const [playing, setPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [speedMenuOpen, setSpeedMenuOpen] = useState(false);
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  // Initialize WaveSurfer after the component mounts
  useEffect(() => {
    // Destroy the previous instance to avoid double rendering
    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
    }

    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'rgba(255, 255, 255, 0.4)',  // Softer waveform color
      progressColor: '#01BECA',  // Progress bar color
      cursorColor: '#fff',  // Cursor color
      height: 100,
      responsive: true,
      barWidth: 3,  // Make bars thinner
      barRadius: 3,  // Rounded edges for a smoother look
      barGap: 2,  // Gap between bars
    });

    // Load the audio file
    wavesurferRef.current.load(audioUrl);

    // Clean up on component unmount
    return () => {
      if (wavesurferRef?.current) {
        wavesurferRef?.current?.destroy();
      }
    };
  }, [audioUrl]);

  // Toggle play/pause
  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurferRef.current.playPause();
  };

  // Skip forward 10 seconds
  const handleSkipForward = () => {
    const currentTime = wavesurferRef.current.getCurrentTime();
    wavesurferRef.current.seekTo((currentTime + 10) / wavesurferRef.current.getDuration());
  };

  // Skip backward 10 seconds
  const handleSkipBackward = () => {
    const currentTime = wavesurferRef.current.getCurrentTime();
    wavesurferRef.current.seekTo((currentTime - 10) / wavesurferRef.current.getDuration());
  };

  // Replay the audio
  const handleReplay = () => {
    wavesurferRef.current.seekTo(0);
    wavesurferRef.current.play();
    setPlaying(true);
  };

  // Toggle speed menu
  const toggleSpeedMenu = () => {
    setSpeedMenuOpen(!speedMenuOpen);
  };

  // Change playback speed
  const handleSpeedChange = (speed) => {
    setPlaybackRate(speed);
    wavesurferRef.current.setPlaybackRate(speed);
    setSpeedMenuOpen(false);
  };

  return (
    <div className="audio-player-container w-full p-6 bg-gradient-to-r from-[#01BECA] to-[#006994] rounded-lg shadow-lg flex flex-col items-center">
      <div ref={waveformRef} className="w-full mb-4"></div> {/* Waveform container */}
      
      {/* Control Buttons */}
      <div className="controls flex justify-center items-center space-x-6 text-3xl text-white">
        <FaStepBackward className="cursor-pointer hover:text-yellow-400" title="Rewind 10s" onClick={handleSkipBackward} />
        {playing ? (
          <FaPause className="cursor-pointer bg-gray-800 p-3 rounded-full hover:bg-gray-900" onClick={handlePlayPause} />
        ) : (
          <FaPlay className="cursor-pointer bg-gray-800 p-3 rounded-full hover:bg-gray-900" onClick={handlePlayPause} />
        )}
        <FaStepForward className="cursor-pointer hover:text-yellow-400" title="Forward 10s" onClick={handleSkipForward} />
        <FaRedo className="cursor-pointer hover:text-yellow-400" title="Replay" onClick={handleReplay} />

        {/* Speed Control Icon */}
        <div className="relative">
          <FaTachometerAlt
            className="cursor-pointer hover:text-yellow-400"
            title="Playback Speed"
            onClick={toggleSpeedMenu}
          />

          {speedMenuOpen && (
            <div className="absolute bottom-12 left-0 w-24 bg-white shadow-md rounded-md">
              <ul className="text-center text-gray-800 text-base z-5">
                <li className="cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleSpeedChange(0.5)}>0.5x</li>
                <li className="cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleSpeedChange(1)}>1x</li>
                <li className="cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleSpeedChange(1.5)}>1.5x</li>
                <li className="cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleSpeedChange(2)}>2x</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
