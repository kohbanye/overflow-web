export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Tables<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]

export interface Database {
	public: {
		Tables: {
			discography: {
				Row: {
					id: number
					image_url: string | null
					label: string | null
					title: string | null
					url: string | null
				}
				Insert: {
					id?: number
					image_url?: string | null
					label?: string | null
					title?: string | null
					url?: string | null
				}
				Update: {
					id?: number
					image_url?: string | null
					label?: string | null
					title?: string | null
					url?: string | null
				}
				Relationships: []
			}
			live: {
				Row: {
					date: string | null
					description: string | null
					id: number
					title: string | null
				}
				Insert: {
					date?: string | null
					description?: string | null
					id?: number
					title?: string | null
				}
				Update: {
					date?: string | null
					description?: string | null
					id?: number
					title?: string | null
				}
				Relationships: []
			}
			news: {
				Row: {
					content: string | null
					date: string | null
					id: number
					title: string | null
				}
				Insert: {
					content?: string | null
					date?: string | null
					id?: number
					title?: string | null
				}
				Update: {
					content?: string | null
					date?: string | null
					id?: number
					title?: string | null
				}
				Relationships: []
			}
			video: {
				Row: {
					id: number
					title: string | null
					youtube_id: string | null
				}
				Insert: {
					id?: number
					title?: string | null
					youtube_id?: string | null
				}
				Update: {
					id?: number
					title?: string | null
					youtube_id?: string | null
				}
				Relationships: []
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}
