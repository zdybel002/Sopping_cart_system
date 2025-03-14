import "./Wrap.css"

const Wrap = (props) => {


    return(
        <div className="card">
            {props.children}
        </div>
    )

}

export default Wrap;