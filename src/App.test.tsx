import { expect, it, describe, test } from 'vitest'
import App from './App'

test('Should allow individual selection of countries', () => {
  expect(App(1, 2)).toBe(3)
})
