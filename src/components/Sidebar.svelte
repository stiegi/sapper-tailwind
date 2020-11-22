<script>
    export let data;

    // TODO USE THIS IS PROD
    // const openings   = data.sidebar.blocks[0].content;
    // const contact    = data.sidebar.blocks[1].content;
    // const direction  = data.sidebar.blocks[2].content;
    // const about      = data.sidebar.blocks[3].content;

    // TODO REMOVE IN PROD!!!  
    $: openings  = data.sidebar.blocks[0].content;
    $: contact   = data.sidebar.blocks[1].content;
    $: direction = data.sidebar.blocks[2].content;
    $: about     = data.sidebar.blocks[3].content;
    import { onMount } from 'svelte';
    import { getLink } from '../store/store';
    onMount(async () => {
		const res = await fetch(getLink('sidebar'));
		data = await res.json();
    });
    // ------------
</script>

<aside class="w-full md:w-1/3 flex flex-col items-center px-3">
    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Öffnungszeiten</p>
        <p class="pb-2">{openings[0][0]}</p>
        <div class="flex flex-wrap overflow-hidden">

            <div class="w-1/2 overflow-hidden">
                {openings[1][0]}
            </div>
        
            <div class="w-1/2 overflow-hidden">
                {openings[1][1]}
            </div>
            <div class="w-1/2 overflow-hidden">
                {openings[2][0]}
            </div>
            
            <div class="w-1/2 overflow-hidden">
                {openings[2][1]}
            </div>
        </div>
    </div>

    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Kontakt</p>
        <p class="pb-2">{contact[0][0]}</p>
        <div class="flex flex-wrap overflow-hidden">

            <div class="md:w-full lg:w-1/4 w-1/4 overflow-hidden">
                {contact[1][0]}
            </div>
        
            <div class="md:w-full lg:w-3/4 w-3/4 overflow-hidden">
                <strong>{contact[1][1]}</strong>
            </div>
            <div class="md:w-full lg:w-1/4 w-1/4 overflow-hidden">
                {contact[2][0]}
            </div>
            
            <div class="md:w-full lg:w-3/4 w-3/4 overflow-hidden">
                <strong class="md:text-sm lg:text-base">{contact[2][1]}</strong>
            </div>
        </div>
    </div>
    
    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Anfahrt</p>
        <p class="pb-2">{direction[0][0]}</p>
        <p class="pb-2"><strong>{direction[1][0]}</strong></p>
        <p class="pb-2">{direction[2][0]}</p>
        <a rel="noreferrer" href="https://www.google.com/maps/place/Flohmarkthalle/@51.927701,7.5934816,17z/data=!3m1!4b1!4m5!3m4!1s0x41700247998ea70f:0x3add206bed3678c3!8m2!3d51.927701!4d7.5956703" target="_blank" class="w-full bg-green-700 text-white font-bold text-sm uppercase rounded hover:bg-green-600 flex items-center justify-center px-2 py-3 mt-4">
            Google Maps
        </a>
    </div>		
    
    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Über uns</p>
        <span class="pb-2">{@html about}</span>
    </div>

    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
        <p class="text-xl font-semibold pb-5">Gallerie</p>
        <div class="grid grid-cols-3 gap-3">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8">
            <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9">
        </div>
        <a href="#" class="w-full bg-green-700 text-white font-bold text-sm uppercase rounded hover:bg-green-600 flex items-center justify-center px-2 py-3 mt-6">
            Mehr Bilder
        </a>
    </div>
    
    <div class="w-full bg-white shadow flex justify-center my-4 p-6">
        <img src="img/flohmarkthalle-sofa.png" width="310px" height="310px" alt="Flohamrkhalle Münster Sofa Logo" class="">
    </div>

</aside>