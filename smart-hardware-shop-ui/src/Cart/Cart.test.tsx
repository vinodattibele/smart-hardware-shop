import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cart from './Cart';
Enzyme.configure({ adapter: new Adapter() });

describe("Cart test", () => {
    let props:any
    beforeEach(() => {
        props = {
            cartItems: [{
                "id": 1,
                "title": "SharkGrip® Pry Bar and Nail Puller ~ 10",
                "price": 13.01,
                "description": "Dual-purpose pry bar and nail puller with a hand-sharpened, double-tempered blade, 10-inches long",
                "category": "Hand Tools",
                "image": "shark.jpg",
                "amount": 130
            }],
            addToCart: jest.fn(),
            removeFromCart: jest.fn(),
            handleEmptyCart: jest.fn()
        }

    })
    test('Checking MyInstancecard is rendering without crash', () => {
        shallow(<Cart {...props} />)
    })
    test('Cart Item Total Value', () => {
        const wrapper = shallow(<Cart {...props} />);
        expect(wrapper.find(".totalItems").at(0).text()).toEqual("Total: $1691.30");
    })

});
