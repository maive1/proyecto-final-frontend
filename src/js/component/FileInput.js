import React from 'react'
import 'materialize-css'

export const FileInput = (props) => (
    <form className="col s12 file-container">
        <div className="row">
            <label className="file-label">{props.label}</label>
            <div className="file-field input-field">
                <div className="btn">
                    <span>Browse</span>
                    <input type="file" />
                </div>

                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"
                        placeholder="Upload file" />
                </div>
            </div>
        </div>
    </form>
)