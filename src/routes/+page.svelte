<script>
  import { onMount } from 'svelte';
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';
  import AlternativeCard from '$lib/components/AlternativeCard.svelte';
  import alternativesData from '$lib/data/alternatives.json';
  import { base } from '$app/paths';

  $: t = translations[$currentLanguage].home;
  $: filteredAlternatives = alternativesData.filter(
    alt => !alt.language || alt.language.toUpperCase() === $currentLanguage.toUpperCase()
  );

  const categoryTypes = {
    aiAssistants: 'AI_assistant',
    searchEngines: 'search_engine',
    emailServices: 'mail_service',
    musicStreaming: 'music_streaming',
    cloudStorage: 'cloud_storage',
    socialMedia: 'social_media',
    browser: 'browser',
    officeSuite: 'office_suite',
    translator: 'translator',
    vpn: 'vpn'
  };

 $: getAlternativesByType = (type) => {
    return filteredAlternatives.filter(alt => alt.type === type);
  };

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-fade').forEach(el => {
      observer.observe(el);
    });
  });

</script>

<svelte:head>
  <title>{t.title}</title>
  <meta name="description" content={t.metaDescription} />
  <link rel="canonical" href="https://europeiskealternativer.no/" />
</svelte:head>

<div class="info-container fade-in">
  <div class="title">{t.whyTitle}</div>
  <div class="black-line"></div>
  
  <div class="info-text-intro">
    <span class="info-text-span">{@html t.whyIntro}</span>
  </div>

  {#each t.reasons as reason}
    <div class="info-text-intro">
      <img class="check-emoji" src="{base}/logo/emoji/check_green.png" alt="emoji" />
      <span>{@html reason}</span>
    </div>
  {/each}
</div>

<div class="main-container fade-in">
  <h1>{t.title}</h1>

  <div class="title">{t.alternativesTitle}</div>
  <div class="black-line"></div>

  <div class="info-text">
    <span class="info-text-span">{@html t.alternativesIntro}</span>
  </div>

  <!-- AI Assistants -->
  <div class="sub-title">{t.categories.aiAssistants}</div>
  {#each getAlternativesByType(categoryTypes.aiAssistants) as alternative}
    <AlternativeCard {alternative} />
  {/each}

  <!-- Email Services -->
  <div class="sub-title">{t.categories.emailServices}</div>
  {#each getAlternativesByType(categoryTypes.emailServices) as alternative}
    <AlternativeCard {alternative} />
  {/each}

  <!-- Office Suite -->
  <div class="sub-title">{t.categories.officeSuite}</div>
  {#each getAlternativesByType(categoryTypes.officeSuite) as alternative}
    <AlternativeCard {alternative} />
  {/each}

  <!-- Music Streaming -->
  <div class="sub-title">{t.categories.musicStreaming}</div>
  {#each getAlternativesByType(categoryTypes.musicStreaming) as alternative}
    <AlternativeCard {alternative} />
  {/each}

  <!-- Browsers -->
  <div class="sub-title">{t.categories.browser}</div>
  {#each getAlternativesByType(categoryTypes.browser) as alternative}
    <AlternativeCard {alternative} />
  {/each}

  <!-- Cloud Storage -->
    <div class="sub-title">{t.categories.cloudStorage}</div>
    {#each getAlternativesByType(categoryTypes.cloudStorage) as alternative}
        <AlternativeCard {alternative} />
    {/each}

  <!-- Social -->
  <div class="sub-title">{t.categories.socialMedia}</div>
  {#each getAlternativesByType(categoryTypes.socialMedia) as alternative}
    <AlternativeCard {alternative} />
  {/each}

  <!-- Search Engines -->
  <div class="sub-title">{t.categories.searchEngines}</div>
  {#each getAlternativesByType(categoryTypes.searchEngines) as alternative}
    <AlternativeCard {alternative} />
  {/each}

  <!-- Translator -->
  <div class="sub-title">{t.categories.translator}</div>
  {#each getAlternativesByType(categoryTypes.translator) as alternative}
    <AlternativeCard {alternative} />
  {/each}

  <!-- VPN -->
  <div class="sub-title">{t.categories.vpn}</div>
  {#each getAlternativesByType(categoryTypes.vpn) as alternative}
    <AlternativeCard {alternative} />
  {/each}
    
  <div class="info-text-outro">
    <span class="info-text-span">{t.alternativesOutro}</span>
  </div>
</div>