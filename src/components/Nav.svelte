<script>
	export let segment;
	let mobileMenuClosed = true;
	const toggleMobileMenu = function() {
		mobileMenuClosed = !mobileMenuClosed;
	}
</script>

<style>

</style>


<header>

        <div class="py-4 px-2 lg:mx-4 xl:mx-12 ">
            <div class="">
                <nav class="flex items-center justify-between flex-wrap  ">
                    <div class="flex items-center flex-no-shrink text-white mr-6 ">
                        <img src="img/flohmarkthalle-muenster-logo.jpg" alt="" class="h-32 xl:h-32  mr-2 ">

                    </div>
                    <div class="block lg:hidden">
                        <button
                            class="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
							on:click="{toggleMobileMenu}">
                            <svg class="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div id="main-nav" class="w-full flex-grow lg:flex items-center lg:w-auto" class:hidden={mobileMenuClosed}>
                        <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                            <a href="."
                                class="underline block lg:inline-block text-md font-bold sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
								class:underline={segment === undefined}
								>
                                
								HOME
                            </a>
                            <a href="about"
                                class="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
								class:underline={segment === 'about'}
								>
                                
								About
                            </a>
                            <a href="blog"
                                class="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
								class:underline={segment === 'blog'}
								>
                                Blog
                            </a>
                        </div>




                    </div>
                </nav>
            </div>
        </div>
  
</header>


