import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CartItem from './CartItem';
Enzyme.configure({ adapter: new Adapter() });

describe("CartItem test", () => {
    let props:any
    beforeEach(() => {
        props = {
            item: {
                "id": 1,
                "title": "SharkGrip® Pry Bar and Nail Puller ~ 10",
                "price": 13.01,
                "description": "Dual-purpose pry bar and nail puller with a hand-sharpened, double-tempered blade, 10-inches long",
                "category": "Hand Tools",
                "image": "shark.jpg",
                "amount": 130
            },
            addToCart: jest.fn(),
            removeFromCart: jest.fn()
        }

    })
    test('Checking MyInstancecard is rendering without crash', () => {
        shallow(<CartItem {...props} />)
    })
    test('Cart Item title Value', () => {
        const wrapper = shallow(<CartItem {...props} />);
        expect(wrapper.find(".title").text()).toEqual("SharkGrip® Pry Bar and Nail Puller ~ 10");
    })

});
