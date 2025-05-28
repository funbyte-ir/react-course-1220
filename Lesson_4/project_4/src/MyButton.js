
export default function MyButton({style, children}) {
    const shoot = () => {
        alert("Great Shot!");
      }
    return (
        <button style={style} onClick={() => shoot()} className="button btn">
            {children}
        </button>
    );
}