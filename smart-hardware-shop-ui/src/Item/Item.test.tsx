import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from './Item';
Enzyme.configure({ adapter: new Adapter() });

describe("Item test", () => {
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
            handleAddToCart: jest.fn()
        }

    })
    test('Checking MyInstancecard is rendering without crash', () => {
        shallow(<Item {...props} />)
    })
    test('Item Title Value', () => {
        const wrapper = shallow(<Item {...props} />);
        expect(wrapper.find(".title").text()).toEqual("SharkGrip® Pry Bar and Nail Puller ~ 10");
    })
    test('Item Description Value', () => {
        const wrapper = shallow(<Item {...props} />);
        expect(wrapper.find(".description").text()).toEqual("Dual-purpose pry bar and nail puller with a hand-sharpened, double-tempered blade, 10-inches long");
    })
    test('Item Price Value', () => {
        const wrapper = shallow(<Item {...props} />);
        expect(wrapper.find(".price").text()).toEqual("$13.01");
    })

});
