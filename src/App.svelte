<script lang="ts">
import Topbar from "./lib/Topbar.svelte";
import Header from "./lib/Header.svelte";
import Listing from "./lib/Listing.svelte";
import Enquiry from "./lib/Enquiry.svelte";
import Footer from "./lib/Footer.svelte";
import Spacer from "./lib/Spacer.svelte"
import BackToTop from "./lib/BackToTop.svelte";
import {gaming, work} from "./lib/Data.js"
import { writable } from "svelte/store";
let currency = writable("USD");
// Variables for nav transparency
let current_scroll = 0;
</script>

<svelte:window bind:scrollY="{current_scroll}" />

<main class="bg-base-300">
  <div class="container mx-auto  min-h-screen">
    <!-- Nav thingy -->
  <Topbar is_transparent={current_scroll > 64} currency="{currency}" />
  <Spacer height={64} _id="top"/>
  <!-- This is the HERO -->
  <Header /> 
  <!-- 3 listings for the gaming laptop in the content thing -->
  <Spacer height={16} _id="gaming"/>
  <Listing listing="{gaming[0]}" currency="{currency}" />
  <Listing listing="{gaming[1]}" currency="{currency}" />
  <Listing listing="{gaming[2]}" currency="{currency}" />

    <!-- 3 listings for the working laptop in the content thing -->
    <Spacer height={16} _id="work"/>
    <Listing listing="{work[0]}" currency="{currency}" />
    <Listing listing="{work[1]}" currency="{currency}" />
    <Listing listing="{work[2]}" currency="{currency}" />


  <!-- Enquiry form -->
  <Spacer height={16} _id="enquiry"/>
  <Enquiry />
  <!-- This is the footer (Not Used/Empty) -->
  <Footer />
  <!-- This element is responsible for the back to top button -->
  <BackToTop />
  </div>
</main>

<style>

</style>