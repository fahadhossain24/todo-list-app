import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Card from "../../components/Card";

const InProgress = () => {
    return (
        <div className="w-[80%] mx-auto h-[100vh] mt-2">

            <div className="flex sm:flex-col lg:flex-row sm:ml-20 lg:ml-0 sm:gap-2 lg: gap-0 justify-between py-2">
                <h2 className="text-2xl font-bold text-blue-900">Task In Progress</h2>
                <div className="pr-8">
                    <SearchBar placeholder='Task search' />
                    <Button buttonText='Search' customStyle='px-2' />
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-row sm:flex-col sm:mx-auto sm:ml-20 lg:ml-0 sm:gap-2 justify-start lg:mr-6 mt-2">
                <Card cardInfo={{
                    title: 'task title',
                    status: 'progress',
                    description: 'task description',
                    customStyle: 'lg:w-[32%] sm:w-[75%] '
                }} >
                    <div >
                        <div className="flex gap-1 items-center justify-between mt-3">
                            <p>Remaining time</p>
                            <p>3 days</p>
                        </div>
                        <progress className="progress progress-accent w-full mb-2" value="70" max="100"></progress>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1">
                                <p className="bg-blue-400 text-white px-2 text-sm">Weekly</p>
                                <p className="bg-blue-400 text-white px-2 text-sm">High</p>
                                <p className="bg-blue-400 text-white px-2 text-sm">Private</p>
                            </div>
                            <Button buttonText='Done' customStyle='px-2 bg-accent' />
                        </div>
                    </div>
                </Card>

                <Card cardInfo={{
                    title: 'task title',
                    status: 'progress',
                    description: 'task description',
                    customStyle: 'lg:w-[32%] sm:w-[75%] '
                }} >
                    <div >
                        <div className="flex gap-1 items-center justify-between mt-3">
                            <p>Remaining time</p>
                            <p>5 days</p>
                        </div>
                        <progress className="progress progress-accent w-full mb-2" value="50" max="100"></progress>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1">
                                <p className="bg-blue-400 text-white px-2 text-sm">Weekly</p>
                                <p className="bg-blue-400 text-white px-2 text-sm">High</p>
                                <p className="bg-blue-400 text-white px-2 text-sm">Private</p>
                            </div>
                            <Button buttonText='Done' customStyle='px-2 bg-accent' />
                        </div>
                    </div>
                </Card>


            </div>
        </div>
    );
};

export default InProgress;