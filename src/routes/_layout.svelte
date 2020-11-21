<script>
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from '../components/GlobalStyle.svelte'
	import Icon from 'fa-svelte'
	import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

/* 	export let segment; */
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<GlobalStyle />
<!-- <Nav {segment}/> -->

    <!-- Top Bar Nav -->
    <nav class="w-full py-4 bg-green-700 shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between">

            <nav>
                <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                    <li><a class="hover:text-gray-200 hover:underline px-4" href="#">Anfahrt</a></li>
					<li><a class="hover:text-gray-200 hover:underline px-4" href="#">Öffnungszeiten</a></li>
                </ul>
			</nav>
            <div class="flex items-center text-lg no-underline text-white pr-6" >

                <a class="" href="#">
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

            <a class="font-bold text-center text-gray-800 uppercase hover:text-gray-700 text-3xl sm:text-5xl" href="#">
                Flohmarkthalle Münster
            </a>
            <p class="text-lg text-gray-600">
                ...und die Suche hat ein Ende!
            </p>
        </div>
    </header>

    <!-- Topic Nav -->
    <nav class="w-full py-4 border-t border-b bg-gray-100">
        <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Ankauf</a>
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Verkauf</a>
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Dienstleistungen</a>
            </div>
        </div>
    </nav>


    <div class="container mx-auto flex flex-wrap py-6">

        <!-- Posts Section -->
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">

            <article class="flex flex-col shadow my-4">
                <!-- Article Image -->
                <a href="#" class="hover:opacity-75">
                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1">
                </a>
                <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-green-800 text-sm font-bold uppercase pb-4">Ankauf</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Wir kaufen Ihren Krempel</a>
                    <a href="#" class="pb-6">Verwandeln sie Ihren Müll in bares Geld blabla Wir kaufen zu fairen Bedingungen an bla Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</a>
                    <a href="#" class="uppercase text-gray-800 hover:text-black">Mehr Info <i class="fas fa-arrow-right"></i></a>
                </div>
			</article>
			
			<article class="flex flex-col shadow my-4">
                <!-- Article Image -->
                <a href="#" class="hover:opacity-75">
                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2">
                </a>
                <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-green-800 text-sm font-bold uppercase pb-4">Verkauf</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Wir haben alles</a>
                    <a href="#" class="pb-6">Auf 1200m verkaufen wir blabla Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</a>
                    <a href="#" class="uppercase text-gray-800 hover:text-black">Mehr Info <i class="fas fa-arrow-right"></i></a>
                </div>
			</article>
			
			<article class="flex flex-col shadow my-4">
                <!-- Article Image -->
                <a href="#" class="hover:opacity-75">
                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3">
                </a>
                <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-green-800 text-sm font-bold uppercase pb-4">Dienstleistungen</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Unser Service für Sie</a>
                    <a href="#" class="pb-6">Wir bieten Haushatsuflösungen bla bla Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</a>
                    <a href="#" class="uppercase text-gray-800 hover:text-black">Mehr Info <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>

        </section>

        <!-- Sidebar Section -->
		<aside class="w-full md:w-1/3 flex flex-col items-center px-3">

            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
				<p class="text-xl font-semibold pb-5">Öffnungszeiten</p>
				
				<p class="pb-2">Wir haben für Sie geöffnet:</p>
				<div class="flex flex-wrap overflow-hidden">

					<div class="w-1/2 overflow-hidden">
						Dienstag - Freitag
					</div>
				
					<div class="w-1/2 overflow-hidden">
						11 - 17 Uhr
					</div>
					<div class="w-1/2 overflow-hidden">
						Samstag
					</div>
				  
					<div class="w-1/2 overflow-hidden">
						11 - 16 Uhr
					</div>
				  </div>
			</div>

			<div class="w-full bg-white shadow flex flex-col my-4 p-6">
				<p class="text-xl font-semibold pb-5">Kontakt</p>
				<p class="pb-2">Kontaktieren Sie uns:</p>
				<div class="flex flex-wrap overflow-hidden">

					<div class="md:w-full lg:w-1/4 w-1/4 overflow-hidden">
						Telefon:
					</div>
				
					<div class="md:w-full lg:w-3/4 w-3/4 overflow-hidden">
						<strong>0163 - 1604333</strong>
					</div>
					<div class="md:w-full lg:w-1/4 w-1/4 overflow-hidden">
						E-Mail:
					</div>
				  
					<div class="md:w-full lg:w-3/4 w-3/4 overflow-hidden">
						<strong class="md:text-sm lg:text-base">info@flohmarkthalle.com</strong>
					</div>
				  </div>
			</div>
			
			<div class="w-full bg-white shadow flex flex-col my-4 p-6">
				<p class="text-xl font-semibold pb-5">Anfahrt</p>
				<p class="pb-2">Unsere Adresse:</p>
				<p class="pb-2"><strong>Daimlerweg 34, 48163 Münster</strong></p>
				<p class="pb-2">Fahren Sie in Münster an der A1234 Richtung Blabla ab</p>
                <a href="https://www.google.com/maps/place/Flohmarkthalle/@51.927701,7.5934816,17z/data=!3m1!4b1!4m5!3m4!1s0x41700247998ea70f:0x3add206bed3678c3!8m2!3d51.927701!4d7.5956703" target="_blank" class="w-full bg-green-700 text-white font-bold text-sm uppercase rounded hover:bg-green-600 flex items-center justify-center px-2 py-3 mt-4">
                    Google Maps
                </a>
			</div>		
			
			<div class="w-full bg-white shadow flex flex-col my-4 p-6">
				<p class="text-xl font-semibold pb-5">Über uns</p>
				<p class="pb-2">Wir sind die grüne Flohmarkthalle bla bla Umweltschutz günstig usw usw Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
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
			
			<div class="w-full bg-white shadow flex flex-col my-4 p-6">
				<img src="img/flohmarkthalle-muenster-logo.jpg" alt="" class="  mr-2 ">
			
			</div>

        </aside>

    </div>

    <footer class="w-full border-t bg-white pb-12">
        <div class="w-full container mx-auto flex flex-col items-center">
            <div class="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
                <a href="#" class="uppercase px-3">Impressum</a>
                <a href="#" class="uppercase px-3">Datenschutz</a>
            </div>
            <div class="uppercase pb-6">&copy; 2020 flohmarkthalle.com</div>
        </div>
    </footer>
<!-- 
<main>
	<slot></slot>
</main> -->