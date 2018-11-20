import * as React from 'react'
import { Theme, withTheme } from '../../../style'
import { Box, BoxProps } from '../../Box'

export interface SwatchProps extends BoxProps<HTMLDivElement> {
  /**
   * The background color to display on the swatch.
   */
  color?: string
  /**
   * Swatch height.
   */
  height?: string
  /**
   * Swatch width.
   */
  width?: string
  theme?: Theme
}

const InternalSwatch: React.SFC<SwatchProps> = ({
  color,
  width,
  height,
  ...props
}) => {
  return (
    <Box
      border="1px solid"
      borderColor="palette.charcoal300"
      borderRadius={props.theme!.components.InputText.borderRadius}
      bg={color || 'white'}
      width={width || '28px'}
      height={height || '28px'}
      {...props}
    />
  )
}

export const Swatch = withTheme(InternalSwatch)