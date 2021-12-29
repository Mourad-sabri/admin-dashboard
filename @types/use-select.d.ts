declare module "use-select" {
  import { MutableRefObject } from "react"

  type UseSelectOptions<T> = {
    value: T
    label: any
    disabled?: boolean
  }

  type UseSelectOptions<T> = Array<UseSelectOptions<T>>

  export type UseSelectState<T, V extends HTMLElement | null> = {
    // state
    visibleOptions: UseSelectOptions<T>[]
    selectedOption: UseSelectOptions<T>[]
    highlightedOption: UseSelectOptions<T>
    searchValue: string
    isOpen: boolean

    // action

    highlightIndex: (indxe: number) => void
    selectOption: (option: UseSelectOptions<T>) => void
    removeValue: (index: number) => void
    setOpen: (isOpen: boolean) => void
    setSearch: (searchValue: string) => void
    getInputProps: (userProps?: any) => any
    getOptionProps: (userProps: any) => any
    optionsRef: MutableRefObject<V>
  }

  export type UseSelectOptionsArgument<T, V extends HTMLElement | null> = {
    create?: boolean
    duplicates?: boolean
    value: T
    scrollToIndex?: (optionIndex: number) => void
    shiftAmount?: number
    filterFn?: (options: UseSelectOptions<T>, searchValue: string) => UseSelectOptions<T>
    getCreateLabel?: (searchValue: string) => string
    optionsRef: MutableRefObject<V>
    stateReducer?: (oldState: UseSelectState<T, V>, newState: UseSelectState<T, V>, action: any) => void
  } & UseSelectMultiOptions<T>

  export default function useSelect<T, v extends HTMLElement | null>(options: UseSelectOptionsArgument<T, V>): UseSelectState<T, V>
}
