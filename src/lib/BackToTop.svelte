<script>
  export let showOnPx = 150;
  let hidden = true;

  function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div href="#top" class="btn btn-info text-3xl text-white transition-all duration-500 fixed right-5 select-none bottom-5 {hidden ? 'hidden':''}" on:click={scrollIntoView}>
    &#x25B2;
</div>
