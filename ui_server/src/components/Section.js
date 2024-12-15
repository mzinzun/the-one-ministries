import React from 'react';
import Ul from './Ul';

const Section = (props) => {
    return(
        <section>
            <h2>{props.data.title}</h2>
            <Ul array={props.data.topics} />
            
        </section>
    )
}

export default Section;