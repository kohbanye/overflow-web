import { writable } from 'svelte/store'
import type { ScrollPosition } from '../types'

export const scrollPosition = writable<ScrollPosition>()
export const isNavbarOpen = writable(false)
