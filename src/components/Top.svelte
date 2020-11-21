<script>
	import Icon from 'fa-svelte'
	import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<!-- Top Bar Nav -->
<nav class="w-full py-4 bg-green-700 shadow">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between">

        <nav>
            <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                <li><a class="hover:text-gray-200 hover:underline px-4" href="anfahrt">Anfahrt</a></li>
                <li><a class="hover:text-gray-200 hover:underline px-4" href="oeffnungszeiten">Öffnungszeiten</a></li>
            </ul>
        </nav>
        <div class="flex items-center text-lg no-underline text-white pr-6" >

            <a target="_blank" rel="noreferrer" href="https://de-de.facebook.com/flohmarkthallems/">
                <Icon icon={ faFacebook }/>
            </a>
            <a class="pl-6" href="#">
                <Icon icon={ faInstagram }/>
            </a>
        </div>
    </div>

</nav>

<!-- Text Header -->
<header class="w-full container mx-auto">
    <div class="flex flex-col items-center py-12">

        <a class="font-bold text-center text-gray-800 uppercase hover:text-gray-700 text-3xl sm:text-5xl" href="/">
            <img src="img/flohmarkthalle-logo.png" alt="Flohmarkthalle Münster Logo">
        </a>
        <h1 class="text-lg text-gray-700 text-center">
            Flohmarkthalle Münster - und die Suche hat ein Ende!
        </h1>
    </div>
</header>

<!-- Topic Nav -->
<nav class="w-full py-4 border-t border-b bg-gray-100">
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <a href="ankauf" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Ankauf</a>
            <a href="verkauf" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Verkauf</a>
            <a href="dienstleistungen" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Dienstleistungen</a>
        </div>
    </div>
</nav>