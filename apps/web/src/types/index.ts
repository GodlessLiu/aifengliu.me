import type { App as VueApp } from 'vue'

export type UserModule = (ctx: { app: VueApp }) => void

export type Post = {
  title: string
  date: string
  tags: string[]
  description: string
  path: string
}
