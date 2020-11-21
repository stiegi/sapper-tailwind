<script>
    import GlobalStyle from '../components/GlobalStyle.svelte'
    import Top from '../components/Top.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<GlobalStyle />
<Top />

<div class="container mx-auto flex flex-wrap py-6">
    <slot></slot>
    <Sidebar />
</div>

<Footer />