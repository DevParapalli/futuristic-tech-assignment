<!-- This element just serves to keep a blank space of the specified unit -->
<script>
    export let height=0; // Pixels
    export let _id = "test"; // Unique ID for this element
</script>


<div id="{_id}" class="w-full" style="--var-height: {height}px">
    
</div>


<style>
    div {
        height: var(--var-height);
    }
</style>