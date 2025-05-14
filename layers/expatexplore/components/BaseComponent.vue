<template>
	<div v-if="branding">
		<h1>{{ branding.name }}</h1>
		<h2>{{ branding.description }}</h2>
		<p>I have overwritten the base component</p>

		<a :href="branding.logo.url">
			<img :src="branding.logo.srcUrl" :alt="branding.logo.alt" width="200px">
		</a>
	</div>
</template>

<script setup lang="ts">
const {data: branding} = await useFetch('/api/branding');
</script>

<style scoped>

</style>