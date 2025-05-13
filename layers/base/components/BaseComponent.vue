<template>
	<h1>{{ branding.name }}</h1>

	<a :href="branding.logo.url">
		<img :src="branding.logo.srcUrl" :alt="branding.logo.alt" width="200px">
	</a>

	<h2>{{ branding.description }}</h2>
</template>

<script setup>
const {data: branding} = await useFetch('/api/branding');
</script>

<style scoped>

</style>