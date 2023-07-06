import { NextResponse } from "next/server";
import { env } from "@/env.mjs";

interface Track {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export async function GET() {
  const responseRefreshToken = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            env.SPOTIFY_CLIENT_ID + ":" + env.SPOTIFY_CLIENT_SECRET
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: env.SPOTIFY_REFRESH_TOKEN,
      }),
    }
  );

  const { access_token } = await responseRefreshToken.json();

  const SpotifyResponse = await fetch("https://api.spotify.com/v1/me/player", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });

  if (
    SpotifyResponse.status == 202 ||
    SpotifyResponse.status == 204 ||
    SpotifyResponse.status == 401
  ) {
    return NextResponse.json({
      isPlaying: false,
    });
  }

  const {
    is_playing: isPlaying,
    repeat_state,
    shuffle_state,
    progress_ms,
    item: {
      external_urls: { spotify: url },
      album: { images },
      artists,
      name: title,
      duration_ms,
    },
  } = await SpotifyResponse.json();

  const artist = artists.map(({ name }: Track) => name).join(", ");

  const cover = images[0].url;

  return NextResponse.json({
    isPlaying,
    title,
    artist,
    url,
    cover,
    repeat_state,
    shuffle_state,
    progress_ms,
    duration_ms,
  });
}
