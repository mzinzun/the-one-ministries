const Event = (props) => {
    return (
        <div>
            <p>
                <p>{props.today}</p>
                <em className="color">{props.name}</em> from
                <em className="color"> {props.city}</em> has this story: {props.story}
            </p>
        </div>
    )
}

export default Event;