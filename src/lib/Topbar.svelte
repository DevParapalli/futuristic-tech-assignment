<script lang="ts">
import { writable } from "svelte/store";


  
  export let currency = writable("USD");

  export let is_transparent = false;

  function currency_on_click() {
    if ($currency == "USD") {
      $currency = "INR";
    } else {
      $currency = "USD";
    }
  }

  function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<div
  class="navbar 
  fixed top-0 left-0
  z-10
  bg-base-100 
  transition-all duration-1000
  {is_transparent ? 'bg-opacity-0' : 'bg-opacity-100'}"
>
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">
      <span
        class="bg-gradient-to-br from-teal-600 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 {is_transparent ? 'opacity-0' : ''}"
        >Future Tech</span
      >
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li on:click={currency_on_click}>
        <span class="currency-display">{$currency}</span>
      </li>
      <li tabindex="0">
        <span>
          Shop
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            /></svg
          >
        </span>
        <ul class="p-2 bg-base-100">
          <li><a href="#gaming" on:click|preventDefault="{scrollIntoView}">Laptops for Game</a></li>
          <li><a href="#work" on:click|preventDefault="{scrollIntoView}">Laptops for Work</a></li>
        </ul>
      </li>
      <li><a href="#enquiry" on:click|preventDefault="{scrollIntoView}">Contact Us</a></li>
      <li class="indicator">
        <span class="indicator-item badge badge-info badge-sm">1</span>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="indicator-bottom" href="javascript:alert('Not Implimented')"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM7 17q-1.125 0-1.7-.988q-.575-.987-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775q-.45.275-1.025.275H8.1L7 15h11.025q.425 0 .7.287q.275.288.275.713t-.288.712Q18.425 17 18 17Z"
            /></svg
          ></a
        >
      </li>
    </ul>
  </div>
</div>
