import { useSelector } from 'react-redux'


export function DynCmpMembers() {
    const { board } = useSelector((storeState) => storeState.boardModule)



    return (
        <h3>Board members</h3>




    )
}