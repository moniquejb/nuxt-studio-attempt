<template>
 <button type="button">{{ title || "I am a button" }}</button>
</template>

<script setup lang="ts">
defineProps<{
	title: string
}>()
</script>

<style scoped>

</style>