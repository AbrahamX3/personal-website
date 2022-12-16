import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.body === process.env.API_KEY){
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
    const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/`;
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  
    const secretID = Buffer.from(client_id + ":" + client_secret).toString(
      "base64"
    );
    const ResponseToken = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: "Basic " + secretID,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token || "",
      }),
    });
  
    const TokenData = await ResponseToken.json();
    const ResponseSpotify = await fetch(NOW_PLAYING_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TokenData.access_token}`,
      },
    });
  
    if (ResponseSpotify.status == 202 || ResponseSpotify.status == 204) {
      return res.status(200).json({
        isPlaying: false,
      });
    }
  
    const DataSpotify = await ResponseSpotify.json();
  
    const url = DataSpotify.item.external_urls.spotify;
    const cover = DataSpotify.item.album.images[0].url;
    const artist = DataSpotify.item.artists
      .map((_artist: { name: string }) => _artist.name)
      .join(", ");
    const title = DataSpotify.item.name;
    const isPlaying = DataSpotify.is_playing;
    const repeat_state = DataSpotify.repeat_state;
    const shuffle_state = DataSpotify.shuffle_state;
    const progress_ms = DataSpotify.progress_ms;
    const duration_ms = DataSpotify.item.duration_ms;
  
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
  } else {
    return res.status(401).json({
      error: "Not Authorized",
    });
  }
}
