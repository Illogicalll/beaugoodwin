<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  export let globeImageUrl: string;
  export let pointsData: Array<any>;
  export let pointAltitude: string;
  export let pointColor: string;
  export let backgroundColor: string;
  export let pointRadius: number;
  export let height: number;
  export let width: number;
  let container: HTMLDivElement;
  let globe: any;

  const dispatch = createEventDispatcher();

  onMount(async () => {

    const Globe = (await import('globe.gl')).default;

    globe = Globe()(container)
      .globeImageUrl(globeImageUrl)
      .pointsData(pointsData)
      .pointAltitude(pointAltitude)
      .pointColor(pointColor)
      .backgroundColor(backgroundColor)
      .height(height)
      .width(width)
      .pointRadius(pointRadius);

    globe.enablePointerInteraction(false);
    globe.pointsMerge(true);

    dispatch('globeReady', { globe });
  });

  export function setPointOfView(pointOfView: { lat: number; lng: number; altitude: number }) {
    if (globe) {
      globe.pointOfView(pointOfView);
    }
  }

</script>

<div bind:this={container} style="height: 10%; width: 100%;"></div>

