import { render, waitFor } from '@testing-library/react';
import Body from '../Body'
import { Provider } from 'react-redux';
import store from '../../utils/store'
import {StaticRouter} from 'react-router-dom/server'
import {STORE_DATA} from '../../mocks/data'

//mocking fetch
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>Promise.resolve(
           STORE_DATA
        )
    })
})



test("search results loads on homepage",async()=>{
const body=render(
    <StaticRouter>
    <Provider store={store}>
        <Body/>
    </Provider>
    </StaticRouter>
)

//wait till the search button is there
await waitFor(()=>
expect(body.getByTestId("prod-list"))
)


const prodList=body.getByTestId("prod-list");
expect(prodList.children.length).toBe(20);
});


