<script lang="ts" context="module">
    import { writable } from 'svelte/store';
    import { browser } from '$app/environment';
  
    export const darkMode = writable(true);
  
    function handleSwitchDarkMode() {
        darkMode.update(value => {
            const newDarkMode = !value;
            localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
            newDarkMode
                ? document.documentElement.classList.add('dark')
                : document.documentElement.classList.remove('dark');
            return newDarkMode;
        });
    }
  
    if (browser) {
      if (
          localStorage.theme === 'dark' ||
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
          handleSwitchDarkMode();
      }
  }
  </script>
  
  <div class="absolute top-4 right-14">
    <input bind:checked={$darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle"/>
    <label for="theme-toggle" />
  </div>
  
  <style lang="postcss">
    #theme-toggle {
        @apply invisible;
    }
  
    #theme-toggle + label {
        @apply absolute cursor-pointer h-10 w-10 rounded-full duration-300 content-[''];
    }
  
    #theme-toggle:not(:checked) + label {
        @apply bg-amber-400;
    }
  
    #theme-toggle:checked + label {
        @apply bg-transparent;
        box-shadow: inset -17px -13px 1px 1px #ddd;
    }
  </style>
  