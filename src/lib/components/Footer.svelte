<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';
  import { goto } from '$app/navigation';

  $: t = translations[$currentLanguage].common;
</script>

<div class="bottom-container">
  <div style="grid-column: 1 / span 12;" class="bottom-container-text">
    {t.footer.copyright}
  </div>

  <div 
    style="grid-column: 1 / span 12;" 
    class="bottom-container-link"
    on:click={() => goto('/personvern')}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && goto('/personvern')}
  >
    {t.footer.privacyPolicy}
  </div>
</div>