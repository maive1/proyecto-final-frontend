import React from 'react'
import 'materialize-css'


export const GenerateInput = (props) => (
    <div className="row input-field-row">
        <div className="input-field ">
            <input onKeyPress={props.onKeyPress} onChange={props.onChange} id={props.id} type={props.type} minLength={props.minLength} required className="validate" />
            <label className="active" htmlFor={props.id}>{props.placeholder}</label>
            <span className="helper-text" data-error={props.errorMsg}></span>
        </div>
    </div>
)
