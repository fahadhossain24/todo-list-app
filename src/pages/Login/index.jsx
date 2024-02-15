import { useForm } from 'react-hook-form';
import loginImg from '../../../images/login.png'
import UserInput from '../../components/UserInput';
import Button from '../../components/Button';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { signup, login } from '../../utils/Auth/Auth';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isRegistrationForm, setIsRegistrationForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [signupError, setSignUpError] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate()
    const { handleSubmit, register, formState } = useForm();

    // signup and login handler using useMutation from tanstack query
    const { mutateAsync, isPending, reset } = useMutation({ mutationFn: signup })
    const handleLogin = useMutation({ mutationFn: login })

    // show modal when isModalOpen is true
    isModalOpen && window.document.getElementById('sign_up_modal')?.showModal();


    // signup and login form sumbit handler
    const onSubmit = async (data) => {
        try {
            if (isRegistrationForm) {
                const response = await mutateAsync(data)

                if (response.status === 'success') {
                    setSignUpError('')
                    setIsRegistrationForm(false)
                    setIsModalOpen(true);
                } else {
                    // console.log()
                    if (response.response) {
                        setSignUpError(response?.response?.data?.error)
                        setIsModalOpen(true);
                    }
                    setSignUpError(response.message)
                    setIsModalOpen(true);
                }

            }
            if (isLoginForm) {
                const { firstName, lastName, ...loginInfo } = data;
                const response = await handleLogin.mutateAsync(loginInfo);
                if (response.status === 'success') {
                    setLoginError('');
                    navigate('/')
                } else {
                    if (response.response) {
                        setSignUpError(response?.response?.data?.error)
                        setIsModalOpen(true);
                    }
                    setSignUpError(response.message)
                    setIsModalOpen(true);
                }
            }

        } catch (error) {
            throw new Error(error.message)
        }
    }


    // console.log(isModalOpen)

    if (isPending || handleLogin.isPending) {
        return <p className='h-[100vh]'>Loading...</p>
    }

    // console.log(loginError)

    // modal body
    const modalBody = signupError
        ? signupError.split(' ')[0] === 'E11000'
            ? 'Oops, failed. Email is already in use.'
            : signupError
        : loginError
            ? loginError
            : `Congratulations! ${isLoginForm ? 'Login successful' : `Sign up successful. Please check your email and verify that`}.`;

    return (

        <div className="h-[100vh] w-[80%] mx-auto flex items-center justify-center">
            <div className='w-[50%] sm:hidden lg:block'>
                <img src={loginImg} alt="" className='w-[100%] mx-auto' />
            </div>
            <div className='w-[40%] bg-blue-200 p-6 rounded-lg mt-8 shadow-xl'>
                <h2
                    className='xl:w-[50%] sm:w-full lg:w-[70%] mx-auto flex justify-evenly text-xl py-1 rounded-full border-2 border-blue-500 font-semibold'
                >
                    <span onClick={() => { setIsLoginForm(true); setIsRegistrationForm(false) }} className={`border-[1px] border-blue-600 px-3 rounded-full hover:bg-blue-400 hover:text-white cursor-pointer ${isLoginForm ? 'bg-blue-400 text-white' : ''}`}>Login</span>{" "}
                    <span onClick={() => { setIsLoginForm(false); setIsRegistrationForm(true) }} className={`border-[1px] border-blue-600 px-3 rounded-full hover:bg-blue-400 hover:text-white cursor-pointer ${isRegistrationForm ? 'bg-blue-400 text-white' : ''}`}>Sign Up</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {isRegistrationForm && <UserInput
                        label="First Name"
                        name="firstName"
                        inputType="text"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle='w-full'
                    />}
                    {isRegistrationForm && <UserInput
                        label="Last Name"
                        name="lastName"
                        inputType="text"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle='w-full'
                    />}
                    <UserInput
                        label="User Email"
                        name="email"
                        inputType="email"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle='w-full'
                    />
                    <UserInput
                        label="Password"
                        name="password"
                        inputType="password"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle='w-full'
                    />
                    {isRegistrationForm && <UserInput
                        label="Confirm Password"
                        name="confirmPassword"
                        inputType="password"
                        // defaultValue={name}
                        required="required"
                        register={register}
                        formState={formState}
                        customInputStyle='w-full'
                    />}
                    <Button buttonText={`${!isRegistrationForm ? 'Login' : 'Sign Up'}`} customStyle='px-3 bg-blue-300 w-full mt-3 hover:bg-blue-500' />
                </form>
            </div>

            {/* configure modal */}
            <Modal
                id='sign_up_modal'
                icon={`${!signupError && !loginError ? 'flat-color-icons:ok' : 'material-symbols:error'}`}
                body={modalBody}
                bodyCustomStyle='text-xl text-center text-blue-900 font-semibold'
                btnText='Ok'
                btnCustomStyle='border-2 px-2 border-blue-500 rounded-xl bg-blue-500 text-white'
                setIsModalOpen={setIsModalOpen}
            />
        </div>

    );
};

export default Login;