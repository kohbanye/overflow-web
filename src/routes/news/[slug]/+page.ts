import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import newsJson from '$content/news.json'

export const load = (({ params }) => {
	const index = Number(params.slug)
	if (isNaN(index)) {
		throw error(400, 'Invalid request parameter')
	}
	if (index < 0 || index >= newsJson.length) {
		throw error(404, 'Not found')
	}

	return {
		news: newsJson[index]
	}
}) satisfies PageLoad
