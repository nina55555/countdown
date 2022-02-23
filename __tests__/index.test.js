/**
 * @jest-environment jsdom
 */
//import {screen} from '@testing-library/jest-dom'

//const jest = require('@testing-library/jest-dom')


// test('uses jest-dom', () => {
//   // document.body.innerHTML = `
//   //   <span data-testid="not-empty"><span data-testid="empty"></span></span>
//   //   <div data-testid="visible">Visible Example</div>
//   // `

//   expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
//   expect(screen.getByText('Visible Example')).toBeVisible()

// })




/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});



/*const num = require ('../index.js');

test('test if number', ()=> {
    it("should retrieve a number with 2 units", () => {
        expect(num.MINUTES.length).toEqual(2);
    })
})
*/