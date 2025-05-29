
export default function UserCard(props){
    const redStyle = {
        display: "flex",
        background: "red"
    }

    return <div style={{display: "flex", background: "blue"}}>
        <p>{props.name}</p>
        <p>{props.family}</p>
    </div>
}