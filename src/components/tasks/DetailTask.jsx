
import Modal from "../ui/Modal";

const DetailTask = ({ isOpen, setIsOpen, data }) => {

    const onCancel = () => {
        setIsOpen(false)
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Details">
            <h1>{data}</h1>
            <div className="flex justify-end gap-3">
                <button type="submit" className="btn btn-primary" onClick={() => onCancel()}>Done</button>
            </div>
        </Modal>
    );
};

export default DetailTask;