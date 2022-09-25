// import ProgressBar from "./ProgressBar.svelte";
import { getBaseURL } from "../../utils/baseURL";
import useSWRImmutable from "swr/immutable";

import {
  Options,
  LoadingState,
  ErrorState,
  TrackInfo,
  OptionsContainer,
  RefreshButton,
  ProgressBar,
  PasuedState,
} from "./SpotifyComponents";

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
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
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
    <div className="lg:w-96 h-4 relative w-full">
      {error != undefined ? (
        <ErrorState error={error} />
      ) : isValidating ? (
        <LoadingState />
      ) : track?.error ? (
        <ErrorState error={track?.error} />
      ) : (
        <>
          <PasuedState isPlaying={track?.isPlaying ?? false} />

          <div className="flex flex-col w-full h-28 align-middle items-center rounded-lg shadow-md cursor-pointer bg-gray-800 border-gray-700 p-2">
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
