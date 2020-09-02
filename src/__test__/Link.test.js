import React from 'react';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from '../Link';
import Items from '../Items';

configure({adapter:new Adapter()});

describe("Link Component",()=>{

    it("State test case",()=>{

        const output=shallow(
<Link title="title" url="url" />
        );
        expect(output.state().clicked).toEqual(false);
        output.simulate('click');
        expect(output.state().clicked).toEqual(true);
    });

    it("Should Show alert",()=>{

        window.alert=jest.fn();
        const output=shallow(
            <Link title="title" url="url" />
        );
        output.simulate('click');
        expect(window.alert).toHaveBeenCalledWith('clicked');
    });
})