<script context="module">
  export const prerender = true;
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <script defer data-domain="europeiskealternativer.no" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"></script>
</svelte:head>

<div class="main-frame">
  <Header />
  
  <slot />
  
  <Footer />
</div>