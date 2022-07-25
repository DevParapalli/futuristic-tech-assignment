<script>
    import {banners} from "src/lib/Data";
    import { CarouselTransition } from 'flowbite-svelte';
    let showThumbs=false
    let showCaptions=false
</script>
<div class="rounded-full">
<CarouselTransition divClass="aspect-[22/9]" images="{banners}" {showThumbs} {showCaptions} transitionType="slide" transitionParams="{{duration: 500}}"/>
</div>