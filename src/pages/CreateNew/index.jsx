import { useForm } from "react-hook-form";
import UserInput from "../../components/UserInput";
import Button from "../../components/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Modal from "../../components/Modal";
import { useState } from "react";

const CreateNew = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { handleSubmit, register, formState, } = useForm();

    isModalOpen && window.document.getElementById('sign_up_modal')?.showModal();


    const saveTask = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/api/v1/task', data)
            return response;
        } catch (error) {
            setIsModalOpen(true);
            throw error.message
        }
    }
    const { mutateAsync, isPending, error } = useMutation({ mutationKey: 'saveTask', mutationFn: saveTask })
    const onSubmit = async (data) => {
        // console.log(data)
        const response = await mutateAsync(data);
        setIsModalOpen(true);
        console.log(response)
    }

    if (isPending) {
        return <p>Loading...</p>
    }

    return (
        <div className="w-[80%] mx-auto h-[100vh]">

            <h3 className="text-2xl  font-bold text-blue-900 text-center py-4">Create new task</h3>

            <div className="lg:w-[70%] sm:w-[60%] sm:ml-48 lg:mx-auto bg-blue-200 p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex sm:flex-col lg:flex-row justify-evenly">
                        <div className="lg:w-1/2 sm:w-full ml-4">
                            <UserInput
                                label="Task Name"
                                name="taskName"
                                inputType="text"
                                // defaultValue={name}
                                required="required"
                                register={register}
                                formState={formState}
                            />
                            <UserInput
                                label="Task Deadline"
                                name="deadline"
                                inputType="Date"
                                // defaultValue={name}
                                required="required"
                                register={register}
                                formState={formState}
                            />
                            <div className="mt-2">
                                <label
                                    className={`font-medium text-sm text-[#444]`}>
                                    Task Description
                                </label> <br />
                                <textarea
                                    name="description"
                                    cols="37"
                                    rows="4"
                                    className='w-[90%] mx-auto p-2 border-[1px] border-black rounded-md mt-1 bg-blue-100'
                                    {...register('description')}
                                ></textarea>
                            </div>

                        </div>
                        <div className="lg:w-1/2 sm:w-full ml-2">
                            <label>Task Priority</label>
                            <select
                                name="task_status"
                                className='w-[90%] mx-auto p-1 border-[1px] border-black rounded-md mt-1 bg-blue-100 mb-2'
                                {...register('taskReminder')}
                            >
                                <option value="low">Low</option>
                                <option value="high">High</option>
                            </select><br />


                            <label>Task Reminder</label> <br />
                            <select
                                name="task_status"
                                className='w-[90%] mx-auto p-1 border-[1px] border-black rounded-md mt-1 bg-blue-100 mb-2'
                                {...register('taskReminder')}
                            >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select><br />

                            <label>Task Visibility</label> <br />
                            <select
                                name="task_status"
                                className='w-[90%] mx-auto p-1 border-[1px] border-black rounded-md mt-1 bg-blue-100 mb-2'
                                {...register('taskVisibility')}
                            >
                                <option value="private">Private</option>
                                <option value="public">Public</option>
                            </select><br />

                            <label>Task Recurring</label> <br />
                            <select
                                name="task_status"
                                className='w-[90%] mx-auto p-1 border-[1px] border-black rounded-md mt-1 bg-blue-100'
                                {...register('taskRecurring')}
                            >
                                <option value="deaily">Deaily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-3">
                        <Button buttonText='Create' type='submit' customStyle='px-3' />
                        {/* <button type="submit" className="bg-blue-400 px-3 py-1 rounded-md text-lg"></button> */}
                    </div>
                </form>
            </div>
            <Modal
                id='sign_up_modal'
                icon={`${!error ? 'flat-color-icons:ok' : 'material-symbols:error'}`}
                body={`${!error ? 'Congreats! New task successfully created': error}`}
                bodyCustomStyle='text-2xl text-center text-blue-900 font-semibold'
                btnText='Ok'
                btnCustomStyle='border-2 px-2 border-blue-500 rounded-xl bg-blue-500 text-white'
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default CreateNew;