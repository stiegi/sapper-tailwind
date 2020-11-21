<script context="module">
    import { getLink } from '../store/store';
	export async function preload({}) {
		const res = await this.fetch(getLink('sidebar'));
		const data = await res.json();
		if (res.status === 200) {
			return { sidebar: data };
		} else {
			this.error(res.status, data.message);
        }
	}
</script>

<script>
    import GlobalStyle from '../components/GlobalStyle.svelte'
    import Top from '../components/Top.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import Footer from '../components/Footer.svelte';
    export let sidebar;



</script>

<GlobalStyle />
<Top />

<div class="container mx-auto flex flex-wrap py-6">
    <slot></slot>
    <Sidebar post={sidebar} />
</div>

<Footer />