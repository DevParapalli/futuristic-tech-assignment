<script>
  export let listing = {
    price: 1200.0,
    name: "Gaming PC Spec 1",
    description: "This is a gaming PC",
    cpu: "Intel Core i7-7700HQ",
    gpu: "NVIDIA GeForce GTX 1660 Ti",
    ram: "16GB",
    storage: "1TB HDD + 512GB SSD",
    image: "../assets/gaming 1.jpg",
  };
  // import { writable } from "svelte/store";
  export let currency;
  $: price = $currency == "USD" ? listing.price : listing.price * 79.88;
  function currency_on_click() {
    if ($currency == "USD") {
      $currency = "INR";
    } else {
      $currency = "USD";
    }
  }
</script>

<div class="card lg:card-side  bg-base-100 shadow-xl mt-4 lg:max-h-[unset]">
  <figure class=""><img src={listing.image} class="lg:max-h-[40vh]" alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">{listing.name}</h2>
    <p>{listing.description}</p>
    <div class="flex">
      <div class="text-gray-400">Memory</div>
      <div class="flex-grow ml-3">{listing.ram}</div>
    </div>
    <div class="flex">
      <div class="text-gray-400">Storage</div>
      <div class="flex-grow ml-3">{listing.storage}</div>
    </div>
    <div class="flex">
      <div class="text-gray-400">CPU</div>
      <div class="flex-grow ml-[2.25rem]">{listing.cpu}</div>
    </div>
    <div class="flex">
      <div class="text-gray-400">GPU</div>
      <div class="flex-grow ml-[2.25rem]">{listing.gpu}</div>
    </div>
    <div class="card-actions justify-end">
      <button on:click|preventDefault="{currency_on_click}" class="btn btn-ghost">{price.toLocaleString()}</button>
      <button class="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
