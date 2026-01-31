<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';

  $: t = translations[$currentLanguage].about;
</script>

<svelte:head>
  <title>{t.title}</title>
  <meta name="description" content={t.metaDescription} />
</svelte:head>

<div class="info-container fade-in">
  <div class="title">{t.title}</div>
  <div class="black-line"></div>

  <div class="info-text">
    <span class="info-text-span">{@html t.content}</span>
  </div>

  <div class="info-emoji">
    {t.emoji}
  </div>
</div>

<div class="main-container fade-in">
  <h1>{t.title}</h1>
</div>