import React from 'react'
import renderer from 'react-test-renderer'
import Text from '.'

test('Text bold renders correctly', () => {
  const tree = renderer.create(<Text.Bold />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Text light renders correctly', () => {
  const tree = renderer.create(<Text.Light />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Text medium renders correctly', () => {
  const tree = renderer.create(<Text.Medium />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Text regular renders correctly', () => {
  const tree = renderer.create(<Text.Regular />).toJSON()
  expect(tree).toMatchSnapshot()
})
