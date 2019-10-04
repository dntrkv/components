import {
  border,
  boxShadow,
  color,
  cursor,
  position,
  layout,
  reset,
  space,
  typography,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  CursorProps,
  PositionProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { css } from 'styled-components'

export interface LayoutComponentProps
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    CursorProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}

export const layoutCSS = css`
  /**
   * Rules here should provide convenience styling for Box derived components.
   * Generally anything here could be overwritten by explicit values set via
   * Box's prop values. For example a function here that sets 'cursor: pointer'
   * would be overwritten by an explicit <Box cursor='copy'/>.
   */
  ${reset}
  ${cursor}

  /**
   * Style Utilities that extend Box's props. Most of these come from
   * styled-system but some are Lens specific.
   *
   * These should be last to override rules with lower priority.
   */
  ${border}
  ${boxShadow}
  ${color}
  ${cursor}
  ${layout}
  ${position}
  ${space}
  ${typography}
`