export type TechnologyCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Language'
  | 'Styling'
  | 'DevOps'
  | 'Tools'

export interface Technology {
  id: string
  name: string
  category: TechnologyCategory
  description: string
  icon: string
  rating: number
  difficulty: 'Beginner-Friendly' | 'Intermediate' | 'Advanced'
  badge: string
}
