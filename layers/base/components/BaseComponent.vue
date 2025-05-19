<template>
	<div v-if="branding">
		<h1 class="text-primary">{{ branding.name }}</h1>

		<a :href="branding.logo.url">
			<img :src="branding.logo.srcUrl" :alt="branding.logo.alt" width="200px">
		</a>

		<h2>{{ branding.description }}</h2>

			<div v-if="branding.customTemplate">
				<MarkdownRenderer :markdown="branding.customTemplate" />
			</div>
	</div>

	<div class="bg-secondary text-primary p-4">
		This should have the secondary color as a background
	</div>
</template>

<script setup lang="ts">
const {data: branding} = await useFetch('/api/branding');
</script>

<style scoped>

</style>