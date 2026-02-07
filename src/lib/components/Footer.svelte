<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  $: t = translations[$currentLanguage].common;
</script>

<div class="bottom-container">
  <div style="grid-column: 1 / span 12;" class="bottom-container-text">
    {@html t.footer.copyright}
  </div>

  <div 
    style="grid-column: 1 / span 12;" 
    class="bottom-container-link"
    on:click={() => goto(`${base}/personvern`)}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && goto(`${base}/personvern`)}
  >
    {t.footer.privacyPolicy}
  </div>
</div>