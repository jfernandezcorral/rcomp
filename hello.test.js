import React from 'react'

describe('JSX', ()=>{
    it('calls createElement', ()=>{
        const s = jest.spyOn(React, 'createElement')
        const p = <h1>hola</h1>
        expect(s).toHaveBeenCalledWith('h1', null, "hola")
    })
})