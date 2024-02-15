import { Icon } from "@iconify/react";

const Card = ({ cardInfo, children }) => {
    return (
        <div className={` shadow-md rounded-md bg-blue-50 p-4 ${cardInfo.customStyle}`}>
            <div className="flex items-center justify-between">
                <h2
                    className="text-xl font-bold ">{cardInfo.title}
                    <span className="bg-blue-400 text-white px-2 text-sm rounded-xl pb-[2px]">{cardInfo.status}</span>
                </h2>
                <Icon icon={`${cardInfo.status === 'new' ? 'ph:dots-three-outline-vertical-fill' : ''}`} className='cursor-pointer' />
            </div>
            <p>{cardInfo.description}</p>
            {children}
        </div>
    );
};

export default Card;


// lg:w-[23%] sm:w-[75%] sm:mx-auto sm:mr-0 h-[100px] shadow-lg rounded-md bg-blue-50 p-4 text-xl font-bold 