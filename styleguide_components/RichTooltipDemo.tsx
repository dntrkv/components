import { hsv } from 'd3-hsv'
import * as React from 'react'
import { Box } from '../src/components/Box'
import {
  HueSaturation,
  SimpleHSV,
} from '../src/components/Colors/ColorWheel/color_wheel_utils'
import { ColorWheel } from '../src/components/Colors/ColorWheel/ColorWheel'
import { RichTooltip } from '../src/components/Overlay/RichTooltip'

export interface RichTooltipDemoState {
  color: SimpleHSV
  size: number
}

export class RichTooltipDemo extends React.Component<{}, RichTooltipDemoState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      color: {
        h: 140,
        s: 1,
        v: 1,
      },
      size: 300,
    }
  }

  public handleColorStateChange = (hs: HueSaturation) => {
    const color = {
      ...hs,
      v: this.state.color.v,
    }
    this.setState({ color })
  }

  public render() {
    const popoverContent = (
      <ColorWheel
        hue={this.state.color.h}
        saturation={this.state.color.s}
        value={this.state.color.v}
        onColorChange={this.handleColorStateChange}
      />
    )

    const color = hsv(
      this.state.color.h,
      this.state.color.s,
      this.state.color.v
    )

    return (
      <Box display="inline-block" mr="small">
        <RichTooltip placement="top" content={popoverContent}>
          <Box bg={color.toString()} p="medium" borderRadius="4px">
            Pick a new color.
          </Box>
        </RichTooltip>
      </Box>
    )
  }
}