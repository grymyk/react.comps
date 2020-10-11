import React, {useState} from 'react'

function Age() {
    let initialAge = 19;
    let yearInc = (year) => year + 1;

    const [age, setAge] = useState(initialAge);
    const handleClick = (age) => setAge(yearInc)

    return (
        <div>
            I am {age} Years Old
            <div>
                <button onClick={handleClick}>Increase my age! </button>
            </div>
        </div>
    )
}

export default Age
