import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
    const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player';
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;
  
    const ResponseRefreshToken = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString(
      "base64"
    ),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN || "",
      }),
    });
  
    const { access_token } = await ResponseRefreshToken.json();

    const SpotifyResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  
    if (SpotifyResponse.status == 202 || SpotifyResponse.status == 204 || SpotifyResponse.status == 401) {
      return res.status(200).json({
        isPlaying: false,
      });
    }
  
    const data = await SpotifyResponse.json();

    const url = data.item.external_urls.spotify;
    const cover = data.item.album.images[0].url;
    const artist = data.item.artists
      .map((name: { name: string }) => name.name)
      .join(", ");
    const title = data.item.name;
    const isPlaying = data.is_playing;
    const repeat_state = data.repeat_state;
    const shuffle_state = data.shuffle_state;
    const progress_ms = data.progress_ms;
    const duration_ms = data.item.duration_ms;
  
    return res.status(200).json({
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
