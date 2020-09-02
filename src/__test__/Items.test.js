import React from 'react';
import renderer  from 'react-test-renderer';
import Items from '../Items';

describe("Items",()=>{
    it("default",()=>{

      let tree=  renderer.create(<Items />);
      expect(tree.toJSON()).toMatchSnapshot();
    })

    it("render correctly when single item",()=>{

        const items=['abc'];
   let tree=  renderer.create(<Items  items={items} />);
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it("render correctly when multiple items",()=>{

        const items=['abc','xyz','pqr'];
     let tree=   renderer.create(<Items items={items}/>);
expect(tree.toJSON()).toMatchSnapshot();
    })

})