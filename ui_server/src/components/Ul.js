import React from 'react';

export default (props) => {
    const lis = props.array.map((item, index) => <li key={index}>{item.name}</li>)

    return (
        <ul>
            {lis}
        </ul>
    )
}