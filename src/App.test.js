import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

// header test
test("Test header renders with correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")

});

// describe method helps organize tests
describe('test for the button', () => {
  // button click test
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")

    userEvent.click(colorBtn)

    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
    expect(colorBtn.textContent).toBe("Change button color to green")

})

})

// test for checkbox
test("checkbox disables button on first click and enables it on second click", () => {
  render(<App />)
  // need button and checkbox variables
  const colorBtn = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox')

  //first click on checkbox disables button
  userEvent.click(checkbox)
  expect(colorBtn).toBeDisabled()

  //second click on checkbox enables button
  userEvent.click(checkbox)
  expect(colorBtn).toBeEnabled()

})

//test for button text being enabled or disabled
test("text indicates if button is disabled or enabled", () => {
  render(<App />)
  // need checkbox variable
  const checkbox = screen.getByRole('checkbox')
  // need paragraph text variable
  const para = screen.getByRole('paragraph')

  // current text
  expect(para.textContent).toBe('Button is Enabled')

  // need click event
  userEvent.click(checkbox)
  expect(para.textContent).toBe('Button is Disabled')

  // need second click event
  userEvent.click(checkbox)
  expect(para.textContent).toBe('Button is Enabled')


  
})