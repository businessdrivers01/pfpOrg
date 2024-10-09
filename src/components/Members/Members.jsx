import React from 'react'
import ExecutiveMembers from "./ExecutiveMembers/ExecutiveMembers.jsx"
import AssociateMembers from "./AssociateMembers/AssociateMembers.jsx"
import BoardMembers from "./BoardMembers/BoardMembers.jsx"
function Members() {
    return (
        <div>
            <BoardMembers />
            <ExecutiveMembers />
            <AssociateMembers />
        </div>
    )
}

export default Members