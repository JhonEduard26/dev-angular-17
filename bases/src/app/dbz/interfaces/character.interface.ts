export interface Character {
  id: string
  name: string
  power: number
}

export interface NewCharacter extends Omit<Character, 'id'> {}
