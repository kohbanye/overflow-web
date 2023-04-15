import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'
import { releaseDate } from '$lib/constants'

export const load = (({ url }) => {
	const now = new Date()
	if (now < releaseDate && url.pathname !== '/countdown') {
		throw redirect(302, '/countdown')
	}
}) satisfies LayoutServerLoad
