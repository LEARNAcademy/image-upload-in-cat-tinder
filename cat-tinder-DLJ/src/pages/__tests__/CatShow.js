import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from '../CatShow'

Enzyme.configure({ adapter: new Adapter() })

it('CatShow renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CatShow />, div)
})