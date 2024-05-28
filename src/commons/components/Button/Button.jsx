import PropTypes from "prop-types";

Button.propTypes = {
    onClick : PropTypes.func,
    children : PropTypes.node,
    option : PropTypes.string,
    className : PropTypes.string
}

function Button({onClick, children, option="default", className = ""}){

    const cn = className + " " + {
        default : "p-5 font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700",
    }[option]

    return (
        <button onClick={onClick} className={cn}>
            {children}
        </button>
    )
}

export default Button;
