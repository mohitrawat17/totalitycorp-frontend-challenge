import Card from "../Card";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { STORE_DATA } from "../../mocks/data";
import Header from "../Header";

// jest doesn't have local storage so we've to mock this also
const mockLocalStorage = {
  getItem: jest.fn(),
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

//mocking fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(STORE_DATA),
  });
});

test("cart should update on clicking add button", async () => {
  const mockUsername = "mockedUsername";
  mockLocalStorage.getItem.mockReturnValue(JSON.stringify(mockUsername));

  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <Body />
        <Card />
      </Provider>
    </StaticRouter>
  );

  //wait till the add button is there
  await waitFor(() => expect(body.getByTestId("add-btn")));

  const addBtn = body.getAllByTestId("add-btn");
  fireEvent.click(addBtn[0]); // single click which means only one item is added to the cart

  const cartItems = body.getByTestId("cart-items");
  expect(cartItems.innerHTML).toBe("Cart 1");
});
