import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database.types'
import type { PageLoad } from './$types'
import { news, live, discography, videos } from '../store'

export const load = (async () => {
	const supabaseUrl = 'https://fjnnfoxbghccslrmuwoo.supabase.co'
	const supabaseKey =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqbm5mb3hiZ2hjY3Nscm11d29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDI5MjEsImV4cCI6MjAwNjgxODkyMX0.3ns0tukfHfHPbu4Bwjsm0UOvOpe3ht7_AXf9_pt3nio'
	const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
		auth: {
			persistSession: false
		}
	})

	const getTables = async <T extends keyof Database['public']['Tables']>(table: T) => {
		const { data, error } = await supabase.from(table).select('*')
		if (error) {
			throw error
		}
		return data
	}

	try {
		news.set(await getTables('news'))
		live.set(await getTables('live'))
		discography.set(await getTables('discography'))
		videos.set(await getTables('video'))
	} catch (error) {
		console.error(error)
	}

	return
}) satisfies PageLoad
