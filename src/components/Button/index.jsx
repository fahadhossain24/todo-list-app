
const Button = ({ buttonText, type, customStyle }) => {
    return (
        <button
            type={type}
            className={`bg-blue-500 py-1 rounded-md text-white ${customStyle}`}
        >
            {buttonText}
        </button>
    );
};

export default Button;