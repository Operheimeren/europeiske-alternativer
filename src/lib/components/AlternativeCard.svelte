<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';

  export let alternative;

  $: t = translations[$currentLanguage].home.alternative;
</script>

<div class="alternative-list scroll-fade">
  <img 
    style="grid-column: 1;" 
    class="company-logo" 
    src="/logo/company/{alternative.logo}" 
    alt="Logo"
  />
  
  <div style="grid-column: 2 / span 5;" class="alternative-title">
    {alternative.company_name}
  </div>

  <div style="grid-column: 1 / span 6;"></div>

  <div style="grid-column: 1 / span 10;" class="info-alt-text">
    {alternative.company_info}
  </div>

  <div style="grid-column: 1 / span 6;"></div>

  <div style="grid-column: 1 / span 3;" class="info-alt-title">
    {t.country}
  </div>
  <div style="grid-column: 4;" class="info-alt-text">
    {alternative.country}
  </div>

  <div style="grid-column: 1 / span 3;" class="info-alt-title">
    {t.alternativeTo}
  </div>
  <div style="grid-column: 4 / span 10;" class="info-alt-text">
    {alternative.alt_to}
  </div>

  <div style="grid-column: 1 / span 3;" class="info-alt-title">
    {t.website}
  </div>
  <div style="grid-column: 4 / span 4;" class="info-alt-text">
    <a href={alternative.website} target="_blank" rel="noopener noreferrer">
      {alternative.website}
    </a>
  </div>

  <div style="grid-column: 1 / span 3;" class="info-alt-title">
    {t.other}
  </div>
  <div style="grid-column: 4 / span 4;" class="info-alt-text">
    {alternative.other_info || ''}
  </div>

  {#if alternative.company_guidelines}
    <div style="grid-column: 1 / span 10;" class="info-alt-text-middle">
      {alternative.company_guidelines}
    </div>
  {/if}
</div>