import { render } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux';
import store from "../../utils/store";
import {StaticRouter} from 'react-router-dom/server'


// jest doesn't have local storage so we've to mock this also
const mockLocalStorage = {
  getItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });



// testing logo
test('logo should load on rendering header ', () => {

 

  const mockUsername = 'mockedUsername';
  mockLocalStorage.getItem.mockReturnValue(JSON.stringify(mockUsername));



  const header=render(
    <StaticRouter>
<Provider store={store}>
  <Header/>
  </Provider>
  </StaticRouter>
  )

  const logo=header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummy.png")
  // console.log(logo);
})



//testing cart items

test('cart is having 0 items initially ', () => {

  const header=render(
    <StaticRouter>
<Provider store={store}>
  <Header/>
  </Provider>
  </StaticRouter>
  )

  const cart=header.getByTestId("cart-items");
  expect(cart.innerHTML).toBe("Cart 0")
})
