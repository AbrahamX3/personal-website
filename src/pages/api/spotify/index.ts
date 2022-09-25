const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/`;
const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  try {
    const secretID = Buffer.from(client_id + ":" + client_secret).toString(
      "base64"
    );
    const res = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: "Basic " + secretID,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }),
    });
    const data = await res.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
  }
};

export async function get() {
  try {
    const requestToken = await getAccessToken();
    const { access_token } = await requestToken?.json();

    const res = await fetch(NOW_PLAYING_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (res.status == 204) {
      return new Response(
        JSON.stringify({
          error: "No song currently playing",
        }),
        { status: 202 }
      );
    }
    const data = await res.json();
    
    const trackURL = data.item.external_urls.spotify;
    const ImageCoverURL = data.item.album.images[0].url;
    const artist = data.item.artists
      .map((_artist: { name: string }) => _artist.name)
      .join(", ");
    const title = data.item.name;
    const isPlaying = data.is_playing;
    const songURL = data.item.external_urls.spotify;
    const repeat_state = data.repeat_state;
    const shuffle_state = data.shuffle_state;
    const progress_ms = data.progress_ms;
    const duration_ms = data.item.duration_ms;

    return new Response(
      JSON.stringify({
        trackURL,
        isPlaying,
        title,
        artist,
        ImageCoverURL,
        songURL,
        repeat_state,
        shuffle_state,
        progress_ms,
        duration_ms,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}
