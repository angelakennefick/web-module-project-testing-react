import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

test("display renders without props/error", () => {
    render(<Display/>);
});

const testShow = {
    //add in approprate test data structure here.
   name: "spongebob",
   summary: "in a pineapple, under the sea", 
   seasons: [{
       id: 0,
       name: "Season 1",
       episodes: [],
   }]
}

test("fetch button returns show component", async () => {
    render(<Display/>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    waitFor(async ()=> {
        expect(screen.queryByTestId("episodes-container")).toBeInTheDocument();
    });
});

test("fetch button returns correct number of seasons", async () => {
    render(<Display show= {testShow}/>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    waitFor(async ()=> {
        expect(screen.queryByTestId("season-option")).toHaveLength(1);
    });
});

// test("fetch button returns optional prop function", async () => {
//     render(<Display show= {testShow}/>);

//     const button = screen.getByRole("button");
//     userEvent.click(button);

//     waitFor(async ()=> {
//        ?
//     });
// });






///Tasks:
//1. Add in necessary imports and values to establish the testing suite.

//2. Test that the Display component renders without any passed in props.

//3. Rebuild or copy a show test data element as used in the previous set of tests.

//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.

//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.

//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.