
const UserInput = ({
    label,
    name,
    inputType,
    customInputStyle,
    customLabelStyle,
    required,
    register,
    formState,
    value,
    defaultValue,
    readOnly,
    }) => {
    const isError = formState.errors[name];
    return (
        <div>
            <label 
                className={`font-medium text-sm text-[#444] ${customLabelStyle}`}>
                {label}
                {
                    required && <span className='text-red-600'>*</span>
                }
            </label>
            <br />
            <input
                type={inputType || 'text'}
                className={`w-[90%] mx-auto h-[30px] p-2 border-[1px] border-black rounded-md mt-1 bg-blue-100 ${customInputStyle} ${isError ? 'border-red-500' : ''}`}
                defaultValue={defaultValue}
                readOnly={readOnly}
                value={value}
                {...register(name, { required })}
            />
            {isError && <p className='text-red-500'>This field is required</p>}
        </div>
    );
};

export default UserInput;