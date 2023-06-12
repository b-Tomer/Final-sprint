import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateTask } from "store/task.actions"


export const CoverDynModal = ({ boardId, groupId, task }) => {
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState('')
    const { board } = useSelector((storeState) => storeState.boardModule)


    const coverColors = [
        { id: 'c1', color: '#4bce97' },
        { id: 'c2', color: '#e2b203' },
        { id: 'c3', color: '#faa53d' },
        { id: 'c4', color: '#f87462' },
        { id: 'c5', color: '#9f8fef' },
        { id: 'c6', color: '#579dff' },
        { id: 'c7', color: '#60c6d2' },
        { id: 'c8', color: '#94c748' },
        { id: 'c9', color: '#e774bb' },
        { id: 'c10', color: '#8590a2' }
    ]

    function chooseColor(chosenColor) {
        setSelectedColor(chosenColor)
        saveColor(chosenColor.color)
    }

    function chooseSize(size) {
        setSelectedSize(size)
        // saveColor(selectedColor.color, size)
    }

    function saveColor(color, size) {
        let taskToUpdate = JSON.parse(JSON.stringify(task));
        taskToUpdate.style.bgColor = color
        if (!size) taskToUpdate.coverSize = selectedSize
        else taskToUpdate.coverSize = size
        try {
            updateTask(
                board._id,
                findGroupIdByTaskId(board, task.id),
                taskToUpdate
            )
        } catch (error) {
            console.log(error)
        }
    }

    function findGroupIdByTaskId(board, taskId) {
        if (!Array.isArray(board.groups)) {
            return null
        }
        for (const group of board.groups) {
            if (!Array.isArray(group.tasks)) {
                continue
            }
            const foundTask = group.tasks.find((task) => task.id === taskId)
            if (foundTask) {
                return group.id
            }
        }
        return null
    }
    return <section className="cover-modal-container">
        <div className="cover-size">
            <h4>Size</h4>
            <div className="size-choice-container">
                <div className={`uncover-choice choice ${(selectedSize !== 'uncover') ? '' : 'selected'}`}
                    onClick={() => chooseSize('uncover')}>
                    <div className="upper-background" style={{ backgroundColor: selectedColor?.color }}>
                    </div>
                    <div className="lower-background">
                        <div className="two-text-stripes-module">
                            <div className="upper-stripe" style={{ backgroundColor: selectedColor?.color }}></div>
                            <div className="lower-stripe" style={{ backgroundColor: selectedColor?.color }}></div>
                            <div className="lower-dummy-btns-area">
                                <div className="flex">
                                    <div className="simple-dummy-short" style={{ backgroundColor: selectedColor?.color }}> </div>
                                    <div className="simple-dummy-short" style={{ backgroundColor: selectedColor?.color }}> </div>
                                </div>
                                <div className="dummy-circle" style={{ backgroundColor: selectedColor?.color }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`cover-choice choice ${selectedSize === 'cover' ? 'selected' : ''}`}
                    onClick={() => chooseSize('cover')}
                    style={{ backgroundColor: selectedColor?.color }} >
                    <div className="two-text-stripes-module">
                        <div className="upper-stripe"></div>
                        <div className="lower-stripe" ></div>
                    </div>
                </div>

            </div>
        </div>
        <button className="wide-cover-btn" onClick={() => chooseColor('')}>Remove cover</button>
        <h4>colors</h4>
        <div className="color-selection">
            {coverColors.map((color) => {
                return (
                    <div key={color.id} className="choose-color-container">
                        <div
                            style={{ backgroundColor: color.color }}
                            className={`color-view ${(color.id === selectedColor?.id) ? 'selected' : ''}`}
                            onClick={() => chooseColor(color)}
                        >
                        </div>
                    </div>
                )
            })}
        </div>

    </section>

}