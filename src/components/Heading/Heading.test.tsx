import React from 'react'
import renderer from 'react-test-renderer'
import Heading from '.'

const { HeadingOne, HeadingTwo, HeadingThree, HeadingFour } = Heading

test('Heading one renders correctly', () => {
  const tree = renderer.create(<HeadingOne />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading two renders correctly', () => {
  const tree = renderer.create(<HeadingTwo />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading three renders correctly', () => {
  const tree = renderer.create(<HeadingThree />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Heading three renders correctly', () => {
  const tree = renderer.create(<HeadingFour />).toJSON()
  expect(tree).toMatchSnapshot()
})
