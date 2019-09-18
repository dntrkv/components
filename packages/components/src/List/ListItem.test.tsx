import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { ListItem } from './ListItem'

const noop = () => {
  return
}

describe('ListItem', () => {
  test('A default ListItem, should be an li', () => {
    assertSnapshot(<ListItem>🥑</ListItem>)
  })

  test('handles mouseenter', () => {
    assertSnapshot(<ListItem onMouseEnter={noop}>🐭</ListItem>)
  })
})