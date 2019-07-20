import React from "react"
import {shallow} from "enzyme"
import Button from "../Button"

const text = "hola"
let wrapper
beforeEach(()=>{
    wrapper = shallow(<Button>{text}</Button>)
})
describe("Button", ()=>{
    it("render button", ()=>{
        expect(wrapper.type()).toBe("button")
    })
    it("pasa children", ()=>{
        expect(wrapper.prop('children')).toBe(text)
    })
    it("pasa otras propiedades", ()=>{
        const onClick = ()=>{}
        const className = "clase"
        const parData = "rgwergtwe"
        wrapper.setProps({onClick, className, "data-action": parData})
        expect(wrapper.prop('onClick')).toBe(onClick)
        expect(wrapper.prop('className')).toBe(className)
        expect(wrapper.prop('data-action')).toBe(parData)
    })
})