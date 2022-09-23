<script>
  export let progress;
  export let duration;
</script>

<div class="w-full bg-gray-700 rounded-lg">
  <div
    class="w-full h-2 rounded-lg bg-spotify-green"
    style={`width: ${(progress / duration) * 100}%;`}
  />
</div>
