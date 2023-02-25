import { NextResponse } from "next/server";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player";
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
import { type NextRequest } from "next/server";

interface Artist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export async function GET(request: NextRequest) {
  const responseRefreshToken = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN || "",
    }),
  });

  const { access_token } = await responseRefreshToken.json();

  const SpotifyResponse = await fetch(NOW_PLAYING_ENDPOINT, {
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

  const artist = artists.map(({ name }: Artist) => name).join(", ");

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
