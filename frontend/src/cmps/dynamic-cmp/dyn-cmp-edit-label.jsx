
import { useState } from "react";


export function DynCmpEditLabel({ task, label }) {
    const [labelState, setLabelState] = useState(label);

    const colors = [
        { color: 'baf3db' }, { color: 'f8e6a0' }, { color: 'ffe2bd' }, { color: 'ffd2cc' }, { color: 'dfd8fd' },
        { color: '4bce97' }, { color: 'e2b203' }, { color: 'faa53d' }, { color: 'f87462' }, { color: '9f8fef' },
        { color: '1f845a' }, { color: '946f00' }, { color: 'b65c02' }, { color: 'ca3521' }, { color: '6e5dc6' },
        { color: 'cce0ff' }, { color: 'c1f0f5' }, { color: 'd3f1a7' }, { color: 'fdd0ec' }, { color: 'dcdfe4' },
        { color: '579dff' }, { color: '60c6d2' }, { color: '94c748' }, { color: 'e774bb' }, { color: '8590a2' },
        { color: '0c66e4' }, { color: '1d7f8c' }, { color: '5b7f24' }, { color: 'ae4787' }, { color: '626f86' },
    ]


    const handleChange = (event) => {
        setLabelState({ ...labelState, title: event.target.value });
    };
    return (
        <div className="edit-labels-container">
            <div className="label-title" style={{ backgroundColor: label.color }}>{label.title}</div>
            <h3>Title</h3>
            <div>
                <input className="edit-input" type="text" value={labelState.title} onChange={handleChange}
                ></input>
            </div>
            <h3>Select a color</h3>
            <div className="colors-container">
                {colors.map(color => {
                    return (
                        <div key={color.color}
                            className="color"
                            style={{ backgroundColor: `#${color.color}` }}> </div>
                    )
                })}
            </div>
            <hr></hr>
            <div className="buttons-section">
                <button className="save-btn">Save</button>
                <button className="delete-btn">Delete</button>
            </div>

        </div>


    )

}