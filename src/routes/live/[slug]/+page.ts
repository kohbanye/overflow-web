import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import liveJson from '$content/live.json'

export const load = (({ params }) => {
	const index = Number(params.slug)
	if (isNaN(index)) {
		throw error(400, 'Invalid request parameter')
	}
	if (index < 0 || index >= liveJson.length) {
		throw error(404, 'Not found')
	}

	return {
		live: liveJson[index]
	}
}) satisfies PageLoad
