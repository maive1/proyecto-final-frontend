import React from 'react'

export const GenerateInput = (props) => (
    <div className="row input-field-row row-margin-botton">
        <div className="input-field ">
            <input onKeyPress={props.onKeyPress} onChange={props.onChange} name={props.name} id={props.id} type={props.type} minLength={props.minLength} required className="validate" />
    <div className="row input-field-row">
        <div className="input-field">
            <input onKeyPress={props.onKeyPress} onChange={props.onChange} id={props.id} type={props.type} minLength={props.minLength} required className="validate" />
            <label className="active" htmlFor={props.id}>{props.placeholder}</label>
            <span className="helper-text" data-error={props.errorMsg}></span>
            <label className="active" htmlFor={props.id}>{props.placeholder}</label>
        </div>
    </div>
)
