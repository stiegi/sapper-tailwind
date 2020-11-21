<script context="module">
    import { getLink } from '../store/store';
	export async function preload({ params, query }) {
		const res = await this.fetch(getLink(params));
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
        }
	}
</script>

<script>
    export let post;
</script>

<section class="w-full md:w-2/3 flex flex-col items-center px-3">
	<main>
		<article class="flex flex-col shadow my-4">
            <p>
                {JSON.stringify(post)}
            </p>
		</article>
	</main>
</section>

