import React from "react";
import ReactDom, {unmountComponentAtNode} from 'react-dom';
import App, {API_URL} from "../App";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});



test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<App/>, div);
});

test('the fetch fails with an error', () => {
    expect.anything();
    return fetch(API_URL).catch(e => expect(e).toMatch('error'));
});

