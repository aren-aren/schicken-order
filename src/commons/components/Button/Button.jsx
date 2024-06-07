import PropTypes from "prop-types";

Button.propTypes = {
    onClick : PropTypes.func,
    children : PropTypes.node,
    option : PropTypes.string,
    className : PropTypes.string,
    disabled : PropTypes.bool
}

function Button({onClick, children, option="default", className = ""}){

    const cn = className + " " + {
        default : "p-5 font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700",
        disabled : "p-5 font-bold py-2 px-4 rounded bg-blue-300 text-white cursor-not-allowed"
    }[option]

    return (
        <button onClick={option==="disabled"?()=>{}:onClick} className={cn}>
            {children}
        </button>
    )
}

export default Button;
