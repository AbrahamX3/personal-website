import { getBaseURL } from "../../utils/baseURL";
import useSWRImmutable from "swr/immutable";
// components
import ErrorState from "./SpotifyErrorState";
import LoadingState from "./SpotifyLoadingState";
import Options from "./SpotifyOptions";
import OptionsContainer from "./SpotifyOptionsContainer";
import TrackInfo from "./SpotifyTrackInfo";
import ProgressBar from "./SpotifyProgressBar";
import RefreshButton from "./SpotifyRefreshButton";
import PasuedState from "./SpotifyPausedState";

type TrackData = {
  ImageCoverURL: string | null | undefined;
  artist: string | null | undefined;
  duration_ms: number | null | undefined;
  isPlaying: boolean | false;
  progress_ms: number | null | undefined | 0;
  repeat_state: string | null | undefined;
  shuffle_state: boolean | false;
  songURL: string | null | undefined;
  title: string | null | undefined;
  error?: string | null | undefined;
  trackURL: string | null | undefined;
  key: string | null | undefined;
};

const SpotifyPlayer = () => {
  const key = `${getBaseURL()}/api/spotify`;
  const interval: number = 15000;
  const options = {
    revalidateOnFocus: true,
    refreshInterval: interval,
  };
  const fetcher = (url: string) =>
    fetch(url, {
      method: "GET",
      headers: {
        mode: "cors",
        credentials: "include",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => res.json());
  const {
    data: track,
    error,
    isValidating,
    mutate,
  } = useSWRImmutable<TrackData>(key, fetcher, options);

  const handleRefresh = () => {
    mutate();
  };

  return (
    <div className="lg:w-96 text-white relative w-full mx-auto mb-8">
      {error != undefined ? (
        <ErrorState error={track?.error ?? ""}>
          <RefreshButton onClick={handleRefresh} />
        </ErrorState>
      ) : isValidating ? (
        <LoadingState />
      ) : track?.error ? (
        <ErrorState error={track?.error ?? ""}>
          <RefreshButton handleClick={handleRefresh} />
        </ErrorState>
      ) : (
        <>
          <PasuedState isPlaying={track?.isPlaying ?? false}>
            <RefreshButton handleClick={handleRefresh} />
          </PasuedState>

          <div className="flex flex-col w-full h-28 align-middle items-center rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-gray-600 via-gray-700 border-2 border-white/30 to-gray-800 backdrop-blur-md p-2">
            <div className="grid grid-cols-3 w-full gap-y-2 grid-rows-2">
              <TrackInfo
                url={track?.trackURL ?? ""}
                image={track?.ImageCoverURL ?? ""}
                title={track?.title ?? ""}
                artist={track?.artist ?? ""}
              />
              <OptionsContainer>
                <Options
                  repeat_state={track?.repeat_state ?? ""}
                  shuffle_state={track?.shuffle_state ?? false}
                />
                <RefreshButton handleClick={handleRefresh} />
              </OptionsContainer>
              <ProgressBar
                isPlaying={track?.isPlaying ?? false}
                mutate={handleRefresh}
                progress={track?.progress_ms ?? 0}
                duration={track?.duration_ms ?? 0}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SpotifyPlayer;
