import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataUpdate } = props

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        let data = await deleteUser(dataUpdate.id)
        if (data && data.EC === 0) {
            toast.success('delete successfully')
            handleClose()
            props.setCurrentPage(1)
            await props.fetchListUsersWithPaginate(1);
        }

        if (data && data.EC !== 0) {
            toast.error('something wrong')
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop='static' size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete The User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user. email = <b>{dataUpdate && dataUpdate.email ? dataUpdate.email : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handleSubmitDeleteUser(); handleClose() }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;