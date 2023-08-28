import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();


    const onCancel = () => {
        reset();
        setIsOpen(false)
    }

    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel()
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add New Task">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Title
                    </label>
                    <input
                        className="w-full rounded-md"
                        type="text"
                        id="title"
                        {...register('title')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Description
                    </label>
                    <textarea
                        className="w-full rounded-md"
                        type="text"
                        id="description"
                        {...register('description')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Deadline
                    </label>
                    <input
                        className="w-full rounded-md"
                        type="date"
                        id="data"
                        {...register('date')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Assign to
                    </label>
                    <select
                        className="w-full rounded-md"
                        id="assignedTo"
                        {...register('assignedTo')}
                    >
                        <option value="TH Raju">TH Raju</option>
                        <option value="Mir Hussain">Mir Hussain</option>
                        <option value="RJ Raju">RJ Raju</option>
                        <option value="Tonmoy Parvez">Tonmoy Parvez</option>
                        <option value="NN Mukta">NN Mukta</option>
                        <option value="Nahid Hasan">Nahid Hasan</option>
                        <option value="MH Rakib">MH Rakib</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Priority
                    </label>
                    <select
                        className="w-full rounded-md"
                        id="priority"
                        {...register('priority')}
                    >
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex justify-end gap-3">
                    <button type="button" className="btn btn-danger" onClick={() => onCancel()}>Cancel</button>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </Modal>
    );
};

export default AddTaskModal;