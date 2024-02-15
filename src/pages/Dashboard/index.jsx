
const Dashboard = () => {
    const tasks = [
        {
            title: "Total New",
            count: 2,
        },
        {
            title: "Total Completed",
            count: 4,
        },
        {
            title: "Total Progress",
            count: 1,
        },
        {
            title: "Total Undefined",
            count: 0,
        },
    ]
    return (
        <div className="w-[80%] h-[100vh] mx-auto ">
            <div className="flex sm:flex-col lg:flex-row justify-evenly gap-2 mx-auto mt-5">
                {
                    tasks.map((item, index) => (
                        <div key={index} className="lg:w-[23%] sm:w-[75%] sm:mx-auto sm:mr-0 h-[100px] shadow-lg rounded-md bg-blue-50 p-4 text-xl font-bold">
                            <h2>{item.title}</h2>
                            <p>{item.count}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;