<!-- components/MarkdownRenderer.vue -->
<template>
	<template v-for="(block, index) in blocks"
	:key="index">
		<component
			:is="block.component"
			v-bind="block.props"
			v-if="block.component"
		/>
		<div
			v-else
			v-html="block.html"
		/>
	</template>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it"
import { computed } from 'vue' // Example dynamic component
import BaseButton from "#layers/base/components/BaseButton.vue";

const props = defineProps<{
	markdown: string
}>()

// Available components
const componentMap = {
	BaseButton,
	// Add more here
}

// Match {{ComponentName key="value"}} — simple regex version
const shortcodeRegex = /\{\{(\w+)([^}]*)}}/g

function parseProps(propString: string) {
	const props: Record<string, any> = {}
	const regex = /(\w+)=["']([^"']+)["']/g
	let match
	while ((match = regex.exec(propString))) {
		props[match[1]] = match[2]
	}
	return props
}

const blocks = computed(() => {
	const md = new MarkdownIt()
	const parts: { html?: string; component?: any; props?: any }[] = []

	// Replace custom shortcodes with markers we can split on
	const modified = props.markdown.replace(shortcodeRegex, (_, name, propStr) => {
		const token = JSON.stringify({ name, props: parseProps(propStr) })
		return `<!--__COMPONENT__${token}-->`
	})

	// Split by markers
	const segments = modified.split(/<!--__COMPONENT__(.*?)-->/g)

	for (let i = 0; i < segments.length; i++) {
		if (i % 2 === 0) {
			// Markdown segment
			const html = md.render(segments[i])
			if (html.trim()) {
				parts.push({ html })
			}
		} else {
			// Component segment
			try {
				const { name, props } = JSON.parse(segments[i])
				const component = componentMap[name]
				if (component) {
					parts.push({ component, props })
				}
			} catch (e) {
				console.warn('Invalid shortcode block:', segments[i])
			}
		}
	}

	return parts
})
</script>
