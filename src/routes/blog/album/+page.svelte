<script lang="ts">
  import { goto } from '$app/navigation';
  import ThemeSwitch, { darkMode } from '$lib/ThemeSwitch.svelte';
  import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
  import * as Avatar from '$lib/components/ui/avatar/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip';
  import { onMount } from 'svelte';
  import { hasRefreshed } from '$lib/stores';

  export let data;
  let posts = data.posts;
  posts = posts.filter((post) => post.categories?.includes('Album'));

  let isDesktop = true;
  let activeIndex = 0;
  let rating = posts[activeIndex]?.rating || 0;
  let displayedScore = 0;

  const handleResize = () => {
    isDesktop = window.innerWidth > 900;
  };

  const goHome = () => {
    goto('/');
  };

  const getScoreColor = (score: number) => {
    const red = Math.floor(255 * (1 - score / 10));
    const green = Math.floor(255 * (score / 10));
    return `rgb(${red}, ${green}, 0)`;
  };

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const getStrokeOffset = (score: number) => {
    const progress = score / 10;
    return circumference - progress * circumference;
  };

  async function animateScore() {
    const increment = 0.1;
    const stepTime = 15;
    if (rating && rating > displayedScore) {
      for (let i = displayedScore; i <= rating; i = parseFloat((i + increment).toFixed(1))) {
        displayedScore = parseFloat(i.toFixed(1));
        await new Promise((resolve) => setTimeout(resolve, stepTime));
      }
    } else if (rating && rating < displayedScore) {
      for (let i = displayedScore; i >= rating; i = parseFloat((i - increment).toFixed(1))) {
        displayedScore = parseFloat(i.toFixed(1));
        await new Promise((resolve) => setTimeout(resolve, stepTime));
      }
    }
  }

  const trackCenterAlbum = () => {
		const cardsContainer = document.querySelector('.cards');
    if (cardsContainer) {
      const cards = document.querySelectorAll('.cards li');

      const updateCenterAlbum = () => {
        const containerCenter = cardsContainer.scrollLeft + cardsContainer.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.MAX_VALUE;
        cards.forEach((card: any, index) => {
          const cardCenter = card.offsetLeft + card.clientWidth / 2;
          const distance = Math.abs(containerCenter - cardCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        activeIndex = closestIndex;
        rating = posts[activeIndex]?.rating || 0;
        animateScore();
      };

      cardsContainer?.addEventListener('scroll', updateCenterAlbum);
      updateCenterAlbum();
    }
  };

	const trackCenterAlbumMobile = () => {
		setTimeout(() => {
		const cardsContainer = document.querySelector('.cards-mobile');

    if (cardsContainer) {
      const cards = document.querySelectorAll('.cards-mobile li');

      const updateCenterAlbum = () => {
        const containerCenter = cardsContainer.scrollLeft + cardsContainer.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.MAX_VALUE;
        cards.forEach((card: any, index) => {
          const cardCenter = card.offsetLeft + card.clientWidth / 2;
          const distance = Math.abs(containerCenter - cardCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        activeIndex = closestIndex;
        rating = posts[activeIndex]?.rating || 0;
        animateScore();
      };

      cardsContainer?.addEventListener('scroll', updateCenterAlbum);
      updateCenterAlbum();
    }
	})
  };

  const moveToNext = () => {
  const cardsContainer = document.querySelector('.cards');
  if (cardsContainer) {
    const cardWidth = cardsContainer.querySelector('li')?.clientWidth || 0;
    cardsContainer.scrollBy({
      left: cardWidth,
      behavior: 'smooth', 
    });
  }
};

const moveToPrevious = () => {
  const cardsContainer = document.querySelector('.cards');
  if (cardsContainer) {
    const cardWidth = cardsContainer.querySelector('li')?.clientWidth || 0;
    cardsContainer.scrollBy({
      left: -cardWidth,
      behavior: 'smooth',
    });
  }
};

  onMount(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    ensureCSS();
		if (isDesktop) {
			trackCenterAlbum();
		} else
		{
			trackCenterAlbumMobile();
		}

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function ensureCSS() {
    if (!$hasRefreshed) {
      window.location.reload();
      hasRefreshed.set(true);
    }
  }

</script>

<div class="absolute top-4 left-4 z-50">
  <Tooltip.Root openDelay={50}>
    <Tooltip.Trigger>
      <button on:click={goHome}>
        <Avatar.Root style={'width: 40px; height: 40px;'}>
          <Avatar.Image
            src="https://pbs.twimg.com/profile_images/1693199305325101056/qQbq0OQN_400x400.jpg"
          />
          <Avatar.Fallback>BG</Avatar.Fallback>
        </Avatar.Root>
      </button>
    </Tooltip.Trigger>
    <Tooltip.Content side="right" class="-translate-y-1">Home</Tooltip.Content>
  </Tooltip.Root>
</div>

<ThemeSwitch />

<div class="flex justify-center items-center h-svh w-svw flex-col">
  {#if isDesktop}
  <div class="text-center" style="transform: translateY(80px)">
    <h1 class="font-bold" style="font-size: 40px">
      {posts[activeIndex].title.split('-')[0].trim()}
    </h1>
    <p class="mb-8">{posts[activeIndex].title.split('-')[1].trimStart()}</p>
  </div>
  {/if}

	{#if !isDesktop}
	<div class="text-center">
    <h1 class="font-bold" style="font-size: 20px">
      {posts[activeIndex].title.split('-')[0].trim()}
    </h1>
    <p class="mb-8">{posts[activeIndex].title.split('-')[1].trimStart()}</p>
  </div>
			<ul class="cards-mobile">
				{#each posts as post}
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li on:click={() => goto(post.slug)}>
						<img src={post.img} alt={post.title} />
					</li>
				{/each}
			</ul>
				<div style="color: {getScoreColor(displayedScore)}; font-size: 40px; font-weight: bold; margin-top: 10px;">
					{displayedScore.toFixed(1)}
				</div>
	{/if}

  {#if isDesktop}
	<ul class="cards">
    {#each posts as post}
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li on:click={() => goto(post.slug)}>
        <img src={post.img} alt={post.title} />
      </li>
    {/each}
  </ul>

  <div class="ring-container">
    <svg width="150" height="150">
      <circle
        class="progress-ring__circle"
        stroke={getScoreColor(displayedScore)}
        stroke-width="10"
        fill="transparent"
        r={radius}
        cx="75"
        cy="75"
        stroke-dasharray={circumference}
        stroke-dashoffset={getStrokeOffset(displayedScore)}
      />
    </svg>

    <div class="score-text" style="color: {getScoreColor(displayedScore)}">
      {displayedScore.toFixed(1)}
    </div>
  </div>

	<div class="absolute top-1/2 left-0 transform -translate-y-1/2">
    <button
      class="navigation-button"
      on:click={moveToPrevious}
      disabled={activeIndex === 0}
    >
      &lt;
    </button>
  </div>

  <div class="absolute top-1/2 right-0 transform -translate-y-1/2">
    <button
      class="navigation-button"
      on:click={moveToNext}
      disabled={activeIndex === posts.length - 1}
    >
      &gt;
    </button>
  </div>
  {/if}

</div>

<div class="absolute bottom-6 left-0 right-0 flex justify-center">
  <PageToggle />
</div>

<style>
  .ring-container {
    position: relative;
    display: inline-block;
    width: 150px;
    height: 150px;
    transform: translateY(20px);
  }

  .score-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  }

  .progress-ring__circle {
    transition: stroke-dashoffset 0.1s linear;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

	.cards {
    --size: 6;
    --cover-size: 300px;
    list-style-image: initial;
    min-height: calc(var(--cover-size));
		height: 650px;
    width: calc(var(--cover-size) * var(--size));
    margin: 0 auto;
    padding: calc(var(--cover-size) / 3 * 2) 0;
    position: relative;
    max-width: 90vw;
    list-style: none;
    overflow-x: scroll;
    white-space: nowrap;
    box-sizing: border-box;
    scroll-snap-type: x mandatory;
  }

	::-webkit-scrollbar {
    display: none;
	}

	.cards:hover::-webkit-scrollbar:horizontal {
    display: block;
		width: 8px;
		height: 8px;
	}
	.cards:hover::-webkit-scrollbar-thumb {
			background-color: #888;
			border-radius: 4px;
	}

	.cards:hover::-webkit-scrollbar-track {
			background-color: rgba(0,0,0,0);
	}

	.cards:hover::-webkit-scrollbar-thumb:hover {
			background-color: #555;
	}

  .cards li {
    view-timeline-name: --li-in-and-out-of-view;
    view-timeline-axis: inline;
    animation: linear adjust-z-index both;
    animation-timeline: --li-in-and-out-of-view;
    perspective: 40em;
    position: relative;
    z-index: 1;
    will-change: z-index;
    user-select: none;
    display: inline-block;
    width: var(--cover-size);
    height: var(--cover-size);
    scroll-snap-align: center;
  }

  .cards li:first-of-type {
    margin-left: calc(70% - (var(--cover-size)));
  }

	.cards li:last-of-type {
    margin-right: calc(70% - (var(--cover-size)));
  }

  .cards li > img {
    animation: linear rotate-cover both;
    animation-timeline: --li-in-and-out-of-view;
    cursor: pointer;
    will-change: transform;
  }

	.cards-mobile {
		--size: 6;
    --cover-size: 300px;
    list-style-image: initial;
    margin: 0 auto;
    position: relative;
    max-width: 100vw;
    overflow-x: scroll;
		overflow-y: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    scroll-snap-type: x mandatory;
  }

  .cards-mobile li {
    position: relative;
    user-select: none;
    display: inline-block;
		margin: 0 15px;
    width: var(--cover-size);
    height: var(--cover-size);
    scroll-snap-align: center;
  }

  .cards-mobile li:first-of-type {
    margin-left: 50%;
  }

	.cards-mobile li:last-of-type {
    margin-right: 50%;
  }

  .cards-mobile li > img {
    cursor: pointer;
  }

  .navigation-button {
    background: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    font-size: 2rem;
    padding: 10px;
    cursor: pointer;
  }

  .navigation-button:disabled {
    background: rgba(0, 0, 0, 0.0);
    cursor: not-allowed;
  }

  @keyframes adjust-z-index {
    0% {
      z-index: 1;
    }
    50% {
      z-index: 100;
    }
    100% {
      z-index: 1;
    }
  }
	
  @keyframes rotate-cover {
    0% {
      transform: translateX(-100%) rotateY(-45deg);
    }
    35% {
      transform: translateX(0) rotateY(-45deg);
    }
    50% {
      transform: rotateY(0) translateZ(1em) scale(1.5);
    }
    65% {
      transform: translateX(0) rotateY(45deg);
    }
    100% {
      transform: translateX(100%) rotateY(45deg);
    }
  }
</style>
