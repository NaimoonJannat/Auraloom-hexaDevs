import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRedo, FaTachometerAlt } from 'react-icons/fa';

const AudioPlayer = ({ audioUrl, user, podcastId }) => {
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
  const handlePlayPause = async () => {
    const currentTime = wavesurferRef.current.getCurrentTime();
    const isBeginning = currentTime === 0; // Check if the user is starting from the beginning

    setPlaying(!playing);
    wavesurferRef.current.playPause();

    // If the user is not logged in, allow play/pause but don't update the play count
    if (!user) {
        console.log('User not logged in. Play count will not be updated.');
        return;
    }

    // Check if user is authenticated, podcast ID is available, and the audio is starting from the beginning
    if (isBeginning && podcastId) {
        try {
            const response = await fetch(`https://auraloom-backend.vercel.app/podcasts/play/${podcastId}?email=${user.email}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update play count.');
            }

            const updatedPodcast = await response.json();
            console.log("Podcast play count updated:", updatedPodcast);

        } catch (error) {
            console.error('Error updating play count:', error);
        }
    }
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
        <FaStepBackward className="cursor-pointer hover:text-[#1D232A] text-2xl md:text-3xl" title="Rewind 10s" onClick={handleSkipBackward} />
        {playing ? (
          <FaPause className="cursor-pointer bg-gray-800 p-3 rounded-full hover:bg-gray-900 text-2xl md:text-3xl" onClick={handlePlayPause} />
        ) : ( 
          <FaPlay className="cursor-pointer bg-gray-800 p-2 md:p-[10px] rounded-full hover:bg-gray-900 text-3xl md:text-4xl" onClick={handlePlayPause} />
        )}
        <FaStepForward className="cursor-pointer hover:text-[#1D232A] text-2xl md:text-3xl" title="Forward 10s " onClick={handleSkipForward} />
        <FaRedo className="cursor-pointer hover:text-[#1D232A] text-2xl md:text-3xl" title="Replay" onClick={handleReplay} />

        {/* Speed Control Icon */}
        <div className="relative">
          <FaTachometerAlt
            className="cursor-pointer hover:text-[#1D232A] text-2xl md:text-3xl" 
            title="Playback Speed"
            onClick={toggleSpeedMenu}
          />

          {speedMenuOpen && (
            <div className="absolute bottom-12 left-0 w-24 z-50 shadow-md rounded-md bg-white"> {/* Increased z-index and added bg-white */}
              <ul className="text-center text-gray-800 text-base">
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
