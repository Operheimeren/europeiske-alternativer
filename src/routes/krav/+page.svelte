<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';
  import { base } from '$app/paths';

  $: t = translations[$currentLanguage].requirements;
</script>

<svelte:head>
  <title>{t.title}</title>
  <meta name="description" content={t.metaDescription} />
</svelte:head>

<div class="info-container fade-in">
  <div class="title">{t.title}</div>
  <div class="black-line"></div>

  <div class="info-text">
    <span class="info-text-span">{@html t.intro}</span>
  </div>

  {#each t.requirements as requirement}
    <div class="info-text">
      <img class="check-emoji" src="{base}/logo/emoji/check_green.png" alt="emoji" />
      <span>{requirement}</span>
    </div>
  {/each}

  <div class="info-text-req">
    <span class="info-text-req">{t.footnote}</span>
  </div>
</div>

<div class="main-container fade-in">
  <h1>{t.title}</h1>
</div>