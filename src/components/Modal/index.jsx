import { Icon } from "@iconify/react";

const Modal = ({ id, icon, btnText, btnCustomStyle, body, bodyCustomStyle, setIsModalOpen }) => {

    return (
        <div>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog
                id={id}
                className="modal modal-bottom sm:modal-middle"
            >
                <div
                    className="modal-box bg-blue-300"
                >
                    <Icon
                        icon={icon}
                        className="text-6xl mx-auto"
                    />
                    <p
                        className={`py-4 ${bodyCustomStyle}`}
                    >
                        {body}
                    </p>
                    <div
                        className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => setIsModalOpen(false)} className={`${btnCustomStyle}`}>{btnText}</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;