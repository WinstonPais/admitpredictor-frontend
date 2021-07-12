import React from 'react';

import ReactDOM from "react-dom";
import App from "./App"

jest.mock("react-dom", () => ({ render: jest.fn() }))

describe('Index.js', () => {
    test('Should Contain App Component', () => {
        // Create and append to document body
        // an HTML element with id = root
        const root = document.createElement("div")
        root.id = "root"
        document.body.appendChild(root)

        // Requires index.js so that react-dom render method is called
        require("./index.js")

        // Asserts render was called with <App />
        // and HTML element with id = root
        expect(ReactDOM.render).toHaveBeenCalledWith(
            <App />, 
            root
        )
    })
})