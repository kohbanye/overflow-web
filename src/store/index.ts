import { writable } from 'svelte/store'
import type { PageCount, ScrollPosition } from '../types'

export const scrollPosition = writable<ScrollPosition>()
export const isNavbarOpen = writable(false)
export const pageCount = writable<PageCount>({ news: 0, live: 0 })
