import App from './App'
import { render, fireEvent, screen } from '@testing-library/react'

describe('App', () => {
  let allCheckbox: HTMLInputElement
  let indiaCheckbox: HTMLInputElement
  let usaCheckbox: HTMLInputElement
  let franceCheckbox: HTMLInputElement

  beforeEach(() => {
    render(<App />)

    allCheckbox = screen.getByLabelText('all')
    indiaCheckbox = screen.getByTestId('india')
    usaCheckbox = screen.getByTestId('usa')
    franceCheckbox = screen.getByTestId('france')
  })

  it('should allow individual selection of countries', async () => {
    fireEvent.click(indiaCheckbox)
    expect(indiaCheckbox.checked).toBe(true)
  })

  it('should select all checkboxes when "Select All" is clicked', async () => {
    fireEvent.click(allCheckbox)
    expect(indiaCheckbox.checked).toBe(true)
    expect(usaCheckbox.checked).toBe(true)
    expect(franceCheckbox.checked).toBe(true)
  })

  it('should deselect "Select All" when a country is deselected', async () => {
    fireEvent.click(allCheckbox)
    fireEvent.click(indiaCheckbox)
    expect(allCheckbox.checked).toBe(false)
  })

  it('should select "Select All" when all countries are selected', async () => {
    fireEvent.click(indiaCheckbox)
    fireEvent.click(usaCheckbox)
    fireEvent.click(franceCheckbox)
    expect(allCheckbox.checked).toBe(true)
  })
})
