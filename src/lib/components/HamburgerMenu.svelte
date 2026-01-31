<script>
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/i18n';
  import { goto } from '$app/navigation';

  let showMenu = false;
  let showLangMenu = false;

  $: t = translations[$currentLanguage].common;

  function toggleMenu() {
    showMenu = !showMenu;
    showLangMenu = false;
  }

  function closeMenu() {
    showMenu = false;
    showLangMenu = false;
  }

  function navigateTo(path) {
    closeMenu();
    goto(path);
  }

  function toggleLangMenu(e) {
    e.stopPropagation();
    showLangMenu = !showLangMenu;
  }

  function selectLanguage(lang) {
    $currentLanguage = lang;
    showLangMenu = false;
  }
</script>

<div 
  style="grid-column: 10 / span 2;" 
  class="hamburger"
  on:click={toggleMenu}
  role="button"
  tabindex="0"
  on:keydown={(e) => e.key === 'Enter' && toggleMenu()}
>
  &#9776;
</div>

{#if showMenu}
  <div class="hamburger-overlay" on:click={closeMenu} role="button" tabindex="-1"></div>

  <div class="hamburger-menu">
    <div 
      style="grid-column: 1;" 
      class="close-menu" 
      on:click={closeMenu}
      role="button"
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && closeMenu()}
    >
      &times;
    </div>

    <div 
      class="hamburger-menu-item"
      on:click={() => navigateTo('/')}
      role="button"
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && navigateTo('/')}
    >
      {t.nav.alternatives}
    </div>

    <div 
      class="hamburger-menu-item"
      on:click={() => navigateTo('/krav')}
      role="button"
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && navigateTo('/krav')}
    >
      {t.nav.requirements}
    </div>

    <div 
      class="hamburger-menu-item"
      on:click={() => navigateTo('/om-oss')}
      role="button"
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && navigateTo('/om-oss')}
    >
      {t.nav.about}
    </div>

    <div 
    class="hamburger-menu-item"
    on:click={toggleLangMenu}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && toggleLangMenu(e)}
    >
    {t.language.code === 'NO' ? 'Språk' : 'Language'}
    </div>

    <!-- Språkmeny som folder ut -->
    {#if showLangMenu}
      <div class="language-submenu">
        <div 
          class="language-submenu-item"
          on:click={() => selectLanguage('en')}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && selectLanguage('en')}
        >
          <img class="flag-submenu-item" src="/logo/flags/en.png" alt="flag" />
          <span>English</span>
        </div>

        <div 
          class="language-submenu-item"
          on:click={() => selectLanguage('no')}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && selectLanguage('no')}
        >
          <img class="flag-submenu-item" src="/logo/flags/no.png" alt="flag" />
          <span>Norsk</span>
        </div>
      </div>
    {/if}
  </div>
{/if}