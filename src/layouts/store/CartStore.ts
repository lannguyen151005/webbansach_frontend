import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import BookModel from '../../models/BookModel'

type CartItem = {
  book: BookModel,
  bookId: number,
  quantity: number,
}

type State = {
  list: CartItem[],
}

type Actions = {
  add: (props: CartItem) => void,
  increaseQuantity: (props: { bookId: number, quantity: number }) => void,
  updateQuantity: (props: { bookId: number, quantity: number }) => void,
  delete: (props: {bookId: number}) => void,
  reset: () => void,
}

export const useCartStore = create<State & Actions>()(
  immer(
    (set, getState) => (
      {
        list: [],
        add: (props) => {
          console.log('here', props)
          const curState = getState()
          const foundItemIndex = curState.list.findIndex(item => item.bookId === props.bookId)

          if (foundItemIndex >= 0) {
            curState.increaseQuantity({ ...props })
          } else {
            set(
              (state) => {
                state.list.push(props)
              }
            )
          }
        },
        increaseQuantity: (props) => {
          const curState = getState()
          const foundItemIndex = curState.list.findIndex(item => item.bookId === props.bookId)

          set(
            (state) => {
              state.list[foundItemIndex].quantity += props.quantity
            }
          )
        },
        updateQuantity: (props) => {
          const curState = getState()
          const foundItemIndex = curState.list.findIndex(item => item.bookId === props.bookId)

          set(
            (state) => {
              state.list[foundItemIndex].quantity = props.quantity
            }
          )
        },
        delete: (props) => {
          const curState = getState()
          const foundItemIndex = curState.list.findIndex(item => item.bookId === props.bookId)

          set(
            (state) => {
              state.list.splice(foundItemIndex, 1)
            }
          )
        },
        reset: () => {
          set(
            (state) => {
              state.list = []
            }
          )
        },

      }
    )
  )
)