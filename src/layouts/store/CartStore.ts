import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import BookModel from '../../models/BookModel'

type CartItem = {
  book: BookModel
  bookId: number
  quantity: number
}

type State = {
  list: CartItem[]
}

type Actions = {
  add: (props: CartItem) => void
  increaseQuantity: (props: { bookId: number; quantity: number }) => void
  updateQuantity: (props: { bookId: number; quantity: number }) => void
  delete: (bookId: number) => void
  reset: () => void
}

export const useCartStore = create<State & Actions>()(
  immer((set, get) => ({
    list: [],

    add: (props) => {
      const existing = get().list.find(item => item.bookId === props.bookId)
      if (existing) {
         console.log("Item exists, increasing quantity", props)
        get().increaseQuantity({ bookId: props.bookId, quantity: props.quantity })
      } else {
        set(state => {
          state.list.push(props)
          console.log("Added new item", state.list)
        })
      }
    },

    increaseQuantity: ({ bookId, quantity }) => {
      set(state => {
        const item = state.list.find(i => i.bookId === bookId)
        if (item) item.quantity += quantity
      })
    },

    updateQuantity: ({ bookId, quantity }) => {
      set(state => {
        const item = state.list.find(i => i.bookId === bookId)
        if (item) item.quantity = quantity
      })
    },

    delete: (bookId) => {
      set(state => {
        state.list = state.list.filter(i => i.bookId !== bookId)
      })
    },

    reset: () => {
      set(state => {
        state.list = []
      })
    },
  }))
)
