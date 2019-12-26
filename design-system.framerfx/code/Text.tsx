import * as React from 'react'
import { addPropertyControls, ControlType } from 'framer'
import * as System from '../../design-system'

export function Text(props) {
  return <System.Text {...props} />
}

Text.defaultProps = System.Text.defaultProps // add same default props from System
addPropertyControls(Text, {
  text: {
    type: ControlType.String,
    title: 'Text',
    defaultValue: 'Type Text',
  },
  type: {
    type: ControlType.Enum,
    title: 'Type',
    defaultValue: 'Heading-1',
    options: ['Heading-1', 'Heading-2'],
  },
  color: {
    type: ControlType.Color,
    title: 'Color',
    defaultValue: '#000',
  },
  align: {
    type: ControlType.SegmentedEnum,
    title: 'Align',
    defaultValue: 'left',
    options: ['left', 'center', 'right'],
    optionTitles: ['Left', 'Center', 'Right'],
  },
})
