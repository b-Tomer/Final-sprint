
import { useState } from "react";
import { useSelector } from "react-redux";
import { boardService } from "../../services/board.service.local";
import { store } from "../../store/store";
import { CLOSE_DYN_ALL_MODALS, SET_MODAL_TITLE } from "../../store/system.reducer";

const colors = [
    { color: 'baf3db' }, { color: 'f8e6a0' }, { color: 'ffe2bd' }, { color: 'ffd2cc' }, { color: 'dfd8fd' },
    { color: '4bce97' }, { color: 'e2b203' }, { color: 'faa53d' }, { color: 'f87462' }, { color: '9f8fef' },
    { color: '1f845a' }, { color: '946f00' }, { color: 'b65c02' }, { color: 'ca3521' }, { color: '6e5dc6' },
    { color: 'cce0ff' }, { color: 'c1f0f5' }, { color: 'd3f1a7' }, { color: 'fdd0ec' }, { color: 'dcdfe4' },
    { color: '579dff' }, { color: '60c6d2' }, { color: '94c748' }, { color: 'e774bb' }, { color: '8590a2' },
    { color: '0c66e4' }, { color: '1d7f8c' }, { color: '5b7f24' }, { color: 'ae4787' }, { color: '626f86' },
]

export function DynCmpEditLabel() {
    const { label } = useSelector((storeState) => storeState.boardModule)
    const { board } = useSelector((storeState) => storeState.boardModule)
    const [labelToEdit, setLabelToEdit] = useState(label)

    function handleChange(event) {
        setLabelToEdit({ ...labelToEdit, title: event.target.value })
    }

    async function onSaveLabel() {
        const labelIdx = board.labels.findIndex(l => l.id === label.id)
        board.labels[labelIdx] = labelToEdit
        try {
            await boardService.save(board)
        } catch (err) {
            console.log('Can not update label')
        } finally {
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
            store.dispatch({ type: SET_MODAL_TITLE, title: '' })
        }
    }

    async function onDeleteLabel() {
        const labelIdx = board.labels.findIndex(l => l.id === label.id)
        board.labels.splice([labelIdx], 1)
        try {
            await boardService.save(board)
        } catch (err) {
            console.log('Can not delete label')
        } finally {
            store.dispatch({ type: CLOSE_DYN_ALL_MODALS })
            store.dispatch({ type: SET_MODAL_TITLE, title: '' })
        }
    }

    function onChangeColor(newColor) {

        setLabelToEdit({ ...labelToEdit, color: ` #${newColor}` })
        console.log(labelToEdit);
    }




    return (
        <div className="edit-labels-container">
            <div className="label-title" style={{ backgroundColor: labelToEdit.color, cursor: 'pointer' }}>{labelToEdit.title}</div>
            <h3>Title</h3>
            <div>
                <input className="edit-input" type="text" value={labelToEdit.title} onChange={handleChange}
                ></input>
            </div>
            <h3>Select a color</h3>
            <div className="colors-container">
                {colors.map(color => {
                    return (
                        <div key={color.color}
                            className="color"
                            onClick={() => onChangeColor(color.color)}
                            style={{ backgroundColor: `#${color.color}` }}> </div>
                    )
                })}
            </div>
            <hr></hr>
            <div className="buttons-section">
                <button onClick={onSaveLabel} className="save-btn">Save</button>
                <button onClick={onDeleteLabel} className="delete-btn">Delete</button>
            </div>

        </div>


    )

}