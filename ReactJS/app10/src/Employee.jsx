import React from 'react'
export default function Employee({emp1}) {
    return (
        <div>
            <p>id:{emp1.id}<br />
                name:{emp1.name}<br />
                email:{emp1.email}<br />
                skill:{emp1.skill}<br />
                proffession:{emp1.proffession}</p>
        </div>
    )
}
