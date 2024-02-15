import Card from "../../components/Card";
import { Icon } from "@iconify/react";

const Completed = () => {
    return (
        <div className="w-[80%] mx-auto h-[100vh] mt-2">

            <div className="flex sm:flex-col lg:flex-row sm:ml-20 lg:ml-0 sm:gap-2 lg: gap-0 justify-between py-2">
                <h2 className="text-2xl font-bold text-blue-900">Completed Task</h2>
            </div>

            <div className="flex flex-wrap lg:flex-row sm:flex-col sm:mx-auto sm:ml-20 lg:ml-0 sm:gap-2 justify-start lg:mr-6 mt-2">
                <Card cardInfo={{
                    title: 'task title',
                    status: 'complete',
                    description: 'task description',
                    customStyle: 'lg:w-[32%] sm:w-[75%] '
                }} >
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            {/* <Icon icon="mdi:success-bold" /> */}
                            <p className="text-green-500 font-bold">On time</p>
                            <Icon icon="ic:baseline-delete" className="cursor-pointer" />
                        </div>
                        <div className="flex gap-1">
                        <p>Date: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Completed;