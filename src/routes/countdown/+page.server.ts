import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { releaseDate } from '$lib/constants'

export const load = (() => {
	const now = new Date()
	if (now >= releaseDate) {
		throw redirect(302, '/')
	}
}) satisfies PageServerLoad
