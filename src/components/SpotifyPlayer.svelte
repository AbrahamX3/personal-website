<script lang="ts">
  import { onMount } from "svelte";
  import { getBaseURL } from "../utils/baseURL";
  import ProgressBar from "./ProgressBar.svelte";
  import pkg from "sswr";
  const { useSWR } = pkg;

  const {
    data: track,
    revalidate,
    isLoading,
  } = useSWR<TrackData>(`${getBaseURL()}/api/spotify`);

  $: progress = $track?.progress_ms || 0;
  $: duration = $track?.duration_ms || 0;

  const addTime = () => {
    progress += 1000;
  };

  const timer = setInterval(() => {
    addTime();
  }, 1000);

  onMount(() => {
    const interval = setInterval(() => {
      revalidate();
    }, 5000);
    return () => clearInterval(interval);
  });

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }
  function convertMsToTime(progress: number, duration: number) {
    let durationSeconds = Math.floor(duration / 1000);
    let durationMinutes = Math.floor(durationSeconds / 60);
    let durationHours = Math.floor(durationMinutes / 60);

    durationSeconds = durationSeconds % 60;
    durationMinutes = durationMinutes % 60;
    durationHours = durationHours % 60;

    if (progress > 0) {
      let progressSeconds = Math.floor(progress / 1000);
      let progressMinutes = Math.floor(progressSeconds / 60);
      let progressHours = Math.floor(progressMinutes / 60);

      progressSeconds = progressSeconds % 60;
      progressMinutes = progressMinutes % 60;
      progressHours = progressHours % 24;

      if (durationHours == 0) {
        return `${padTo2Digits(progressMinutes)}:${padTo2Digits(
          progressSeconds
        )}`;
      } else {
        return `${padTo2Digits(progressHours)}:${padTo2Digits(
          progressMinutes
        )}:${padTo2Digits(progressSeconds)}`;
      }
    } else {
      if (durationHours == 0) {
        return `${padTo2Digits(durationMinutes)}:${padTo2Digits(
          durationSeconds
        )}`;
      } else {
        return `${padTo2Digits(durationHours)}:${padTo2Digits(
          durationMinutes
        )}:${padTo2Digits(durationSeconds)}`;
      }
    }
  }
</script>

<div class="lg:w-96 h-4 relative w-full">
  {#if !$isLoading}
    {#if $track}
      {#if !$track?.error}
        <div
          class="flex flex-col w-full h-28 align-middle items-center rounded-lg shadow-md cursor-pointer bg-gray-800 border-gray-700 p-2"
        >
          <div class="grid grid-cols-3 w-full gap-y-2 grid-rows-2">
            <a
              href={$track.trackURL}
              target="_blank"
              class="flex items-center hover:bg-gray-700/60 pr-2 rounded-lg col-span-2 align-middle space-x-4"
            >
              <img
                src={$track.ImageCoverURL}
                alt={$track.title}
                class="w-16 h-16 aspect-square rounded-lg"
              />
              <div class="flex flex-col overflow-hidden align-middle">
                <p class="truncate font-bold" title={$track.title}>
                  {$track.title}
                </p>
                <p class="truncate text-sm" title={$track.artist}>
                  {$track.artist}
                </p>
              </div>
            </a>
            <div
              class="col-span-1 flex-wrap flex justify-center items-center align-middle space-x-2"
            >
              {#if $track.shuffle_state}
                <svg
                  class="w-6 h-8 fill-spotify-green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M18 17.883V16l5 3-5 3v-2.09a9 9 0 0 1-6.997-5.365L11 14.54l-.003.006A9 9 0 0 1 2.725 20H2v-2h.725a7 7 0 0 0 6.434-4.243L9.912 12l-.753-1.757A7 7 0 0 0 2.725 6H2V4h.725a9 9 0 0 1 8.272 5.455L11 9.46l.003-.006A9 9 0 0 1 18 4.09V2l5 3-5 3V6.117a7 7 0 0 0-5.159 4.126L12.088 12l.753 1.757A7 7 0 0 0 18 17.883z"
                  />
                </svg>
              {:else}
                <svg
                  class="w-6 h-8 fill-spotify-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M18 17.883V16l5 3-5 3v-2.09a9 9 0 0 1-6.997-5.365L11 14.54l-.003.006A9 9 0 0 1 2.725 20H2v-2h.725a7 7 0 0 0 6.434-4.243L9.912 12l-.753-1.757A7 7 0 0 0 2.725 6H2V4h.725a9 9 0 0 1 8.272 5.455L11 9.46l.003-.006A9 9 0 0 1 18 4.09V2l5 3-5 3V6.117a7 7 0 0 0-5.159 4.126L12.088 12l.753 1.757A7 7 0 0 0 18 17.883z"
                  />
                </svg>
              {/if}
              {#if $track.repeat_state === "off"}
                <svg
                  class="w-6 h-8 fill-spotify-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"
                  />
                </svg>
              {:else if $track.repeat_state === "track"}
                <svg
                  class="w-6 h-8 text-spotify-green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zm-5 4h2v8h-2v-6H9V9l2-1z"
                  />
                </svg>
              {:else}
                <svg
                  class="w-6 h-8 text-spotify-green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z"
                  />
                </svg>
              {/if}
              <button on:click={() => revalidate()} title="Refresh">
                <svg
                  class="w-6 h-6 duration-150 transition-all ease-in block hover:text-spotify-green text-spotify-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"
                  />
                </svg>
              </button>
            </div>
            <div class="col-span-3">
              <div
                class="flex space-x-2 align-middle items-center justify-between"
              >
                <div>
                  {#if progress >= duration}
                    {convertMsToTime(progress, $track.duration_ms)}
                  {:else}
                    {convertMsToTime(duration, duration)}
                  {/if}
                </div>
                <ProgressBar {progress} duration={$track.duration_ms} />
                <div>{convertMsToTime(0, $track.duration_ms)}</div>
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div
          class="flex w-full h-20 align-middle items-center justify-center space-x-2 rounded-lg shadow-md hover:bg-gray-800/80 bg-gray-800 border-gray-700 p-2"
        >
          <span>{$track.error}</span>
          <button on:click={() => revalidate()} title="Refresh">
            <svg
              class="w-6 h-6 duration-150 transition-all ease-in block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"
              />
            </svg>
          </button>
        </div>
      {/if}
    {/if}
  {:else}
    <div
      class="flex w-full h-20 align-middle items-center justify-center space-x-2 rounded-lg shadow-md hover:bg-gray-800/80  bg-gray-800 border-gray-700 p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-6 h-6 text-spotify-green animate-spin"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0zm0-2a9.001 9.001 0 0 1 17.89 0H18.93a7.002 7.002 0 0 0-13.858 0H3.055z"
          fill="currentColor"
        /></svg
      >
      <div>Loading...</div>
    </div>
  {/if}
</div>
