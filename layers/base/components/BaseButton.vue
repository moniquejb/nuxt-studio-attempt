<template>
	<Button :label="title" />
	<Button severity="secondary" :label="title" />
</template>

<script setup lang="ts">
import Button from 'primevue/button';

defineProps<{
	title: string
}>()
</script>

<style scoped>

</style>