import { writable } from 'svelte/store'
import type { PageCount, ScrollPosition } from '../types'
import type { Tables } from '../types/database.types'

export const news = writable<Tables<'news'>[]>()
export const live = writable<Tables<'live'>[]>()
export const discography = writable<Tables<'discography'>[]>()
export const videos = writable<Tables<'video'>[]>()

export const scrollPosition = writable<ScrollPosition>()
export const isNavbarOpen = writable(false)
export const pageCount = writable<PageCount>({ news: 0, live: 0 })
export const isInitialLoad = writable(true)
