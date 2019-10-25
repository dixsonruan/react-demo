import React, { useState } from 'react'

const InputNumber = (props) => {
    const [v, setValue] = useState(props.defaultValue ? props.defaultValue : '')
    return (
        <input type="number" value={v} onChange={(e) => {
            setValue(e.target.value)
            props.onChange(e.target.value)
        }}/>
    )
}

function InputNumberApp() {
    const [value] = useState('123')
    return (
        <div>
            <InputNumber onChange={e=>{
                console.log('changed', e)
            }}/>
            <br/>
            <InputNumber defaultValue={value} onChange={e=>{
                console.log('changed', e)
            }}/>
        </div>
    )
}

export default InputNumberApp;