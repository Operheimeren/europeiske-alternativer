<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';

  $: t = translations[$currentLanguage].privacy;
</script>

<svelte:head>
  <title>{t.title}</title>
  <meta name="description" content={t.metaDescription} />
</svelte:head>

<div class="info-container fade-in">
  <div class="title">{t.title}</div>
  <div class="black-line"></div>

  <div class="info-text">
    <span class="info-text-span">{t.intro}</span>
  </div>
</div>

<div class="main-container fade-in">
  <h1>{t.title}</h1>

  {#each t.sections as section}
    <div class="sub-title-privacy">
      {section.title}
    </div>

    <div class="info-text-privacy">
      <span>{@html section.content}</span>
    </div>
  {/each}
</div>