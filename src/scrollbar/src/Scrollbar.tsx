import type {
  AllowedComponentProps,
  ComponentCustomProps,
  ExtractPropTypes,
  VNodeProps
} from 'vue'
import { NScrollbar } from '../../_internal'
import type { ScrollbarTheme } from '../../_internal/scrollbar/styles'
import type { ThemeProps } from '../../_mixins'

export interface ScrollTo {
  (x: number, y: number): void
  (options: { left?: number, top?: number, behavior?: ScrollBehavior }): void
}

export type ScrollBy = ScrollTo

export interface ScrollbarInst {
  scrollTo: ScrollTo
  scrollBy: ScrollBy
}
export type ScrollbarProps = Pick<
  ExtractPropTypes<ThemeProps<ScrollbarTheme>>,
  'themeOverrides'
> & {
  abstract?: boolean
  container?: () => HTMLElement | null | undefined
  content?: () => HTMLElement | null | undefined
  size?: number
  xScrollable?: boolean
  trigger?: 'none' | 'hover'
  onScroll?: (e: Event) => void
}
export const scrollbarProps = NScrollbar.props as ScrollbarProps

const Scrollbar = NScrollbar as unknown as (
  props: ScrollbarProps &
    VNodeProps &
    AllowedComponentProps &
    ComponentCustomProps
) => any

export default Scrollbar
