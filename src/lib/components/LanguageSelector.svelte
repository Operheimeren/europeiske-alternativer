<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';
  import { base } from '$app/paths';

  let showMenu = false;

  $: t = translations[$currentLanguage].common;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  function selectLanguage(lang) {
    $currentLanguage = lang;
    showMenu = false;
  }

  function handleOutsideClick(event) {
    if (showMenu && !event.target.closest('.language-selector') && !event.target.closest('.language-menu')) {
      showMenu = false;
    }
  }
</script>

<svelte:window on:click={handleOutsideClick} />

<div style="grid-column: 10 / span 2; position: relative; display: flex; align-items: center; justify-content: flex-end; gap: 0.5rem;">
  
 
  <img 
    id="language-flag"
    class="flag"
    src="{base}/logo/flags/{$currentLanguage}.png"
    alt="{$currentLanguage === 'no' ? 'Norsk' : 'English'} flag"
  />
  
  <div 
    class="language-selector"
    on:click|stopPropagation={toggleMenu}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && toggleMenu()}
  >
    {t.language.code}
  </div>

  {#if showMenu}
    <div class="language-menu" on:click|stopPropagation>
      <div class="language-menu-row" on:click={() => selectLanguage('en')} role="button" tabindex="0">
        <img class="flag-menu-item" src="{base}/logo/flags/en.png" alt="English flag" />
        <span class="language-menu-text">English</span>
      </div>

      <div class="language-menu-row" on:click={() => selectLanguage('no')} role="button" tabindex="0">
        <img class="flag-menu-item" src="{base}/logo/flags/no.png" alt="Norwegian flag" />
        <span class="language-menu-text">Norsk</span>
      </div>
    </div>
  {/if}
</div>