<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';
  import { goto } from '$app/navigation';
  import LanguageSelector from './LanguageSelector.svelte';
  import HamburgerMenu from './HamburgerMenu.svelte';
  import { base } from '$app/paths';

  $: t = translations[$currentLanguage].common;
</script>

<div class="top-container">
  <div style="grid-column: 1;">
    <img 
      class="top-container-logo" 
      src="{base}/logo/logo/logo_no.png" 
      alt="Logo"
      on:click={() => goto(`${base}/`)}
      role="button"
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && goto(`${base}/`)}
    />
  </div>

  <div 
    style="grid-column: 3 / span 2;" 
    class="top-container-title"
    on:click={() => goto(`${base}/`)}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && goto(`${base}/`)}
  >
    {t.nav.alternatives}
  </div>

  <div 
    style="grid-column: 6;" 
    class="top-container-title"
    on:click={() => goto(`${base}/krav`)}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && goto(`${base}/krav`)}
  >
    {t.nav.requirements}
  </div>

  <div 
    style="grid-column: 7 / span 2;" 
    class="top-container-title"
    on:click={() => goto(`${base}/om-oss`)}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && goto(`${base}/om-oss`)}
  >
    {t.nav.about}
  </div>

  <LanguageSelector />

  <div style="grid-column: 10 / span 3;">
    <HamburgerMenu />
  </div>
</div>