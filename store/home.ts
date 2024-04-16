import { defineStore } from 'pinia'
type Post = string
interface State {
  name: string,
  post: Post
}

export const useMyHomeStore = defineStore('home', {
  state: (): State => ({
    name: 'John Doe',
    post: ''
  }),
})
