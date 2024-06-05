import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancel }) {
    const title = useRef()
    const description = useRef()
    const date = useRef()
    const modal = useRef()

    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = date.current.value

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '') {
            modal.current.open()
            return
        }

        //validation
        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate,
        })
    }


    return (
        <>
            <Modal buttonCaption='Close' ref={modal}>
                <h2 className="mb-4 text-2xl text-stone-700 font-semibold">Invalid Input</h2>
                <p className=" text-base text-stone-600 font-light"> Please provide a valid input for all fields</p>
            </Modal>
            <div className="w-[35rem]" >
                <div className="buttons-wrapper ml-auto w-fit flex gap-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded hover:bg-stone-200"
                        type="button" >Cancel</button>
                    <button onClick={handleSave}
                        className="bg-stone-700 hover:bg-stone-600 text-white px-4 py-2 rounded"
                        type="submit">
                        Save
                    </button>
                </div>
                <Input ref={title} type="text" label="title"></Input>
                <Input ref={description} type="text" label="description" InputContainer="textarea"></Input>
                <Input ref={date} type="date" label="due date"></Input>
            </div>
        </>
    )
}