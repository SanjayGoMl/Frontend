export enum Path {
  HOME = '/',
  CANVAS = '/canvas',
  HISTORY = '/history',
}

export enum UserType {
  assistant =   'assistant',
  user = 'user'
}

export type IMessage = {
  role: string
  content: any
  name: string
  title?: string
}