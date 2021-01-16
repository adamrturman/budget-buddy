// import Moment from 'react-moment'

export const Row = (props:any) => {
    console.log(props)
    return (
        <tr>
            <td>{props.character.name}</td>
            <td>{props.character.height}</td>
            <td>{props.character.mass}</td>
            <td>{props.character.eye_color}</td>
            <td>{props.character.hair_color}</td>
            {/* <td><Moment format="MM/DD/YYYY">{props.character.created}</Moment></td> */}
            {/* <td><Moment >{props.character.created}</Moment></td> */}
            <td>{props.character.created}</td>
            <td>{props.character.edited}</td>
        </tr>

    )
}
