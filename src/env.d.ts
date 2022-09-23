/// <reference types="astro/client" />

interface TrackData {
    ImageCoverURL: string;
    artist: string;
    duration_ms: number;
    isPlaying: boolean;
    progress_ms: number;
    repeat_state: string;
    shuffle_state: boolean;
    songURL: string;
    title: string;
    error?: string;
    trackURL: string;
  }