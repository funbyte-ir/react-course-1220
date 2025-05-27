import Funbyte2 from "./Funbyte2";



export default function Funbyte({description, hello, children}) {
    console.log(children);
    return (
        <div>
            <h1>Funbyte</h1>
            <p>{description}</p>
            <p>{hello}</p>
            {children}
        </div>
    );
}