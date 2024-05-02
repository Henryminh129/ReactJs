
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FcPlus } from 'react-icons/fc'
import _ from 'lodash'


const ModalViewUser = (props) => {
    const { show, setShow, dataUpdate } = props

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const [role, setRole] = useState("...")
    const [previewImage, setPreviewImage] = useState("")

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {

            setEmail(dataUpdate.email);
            setPassword(dataUpdate.password)
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage('');
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }

        }
    }, [dataUpdate])

    const handleClose = () => {
        setShow(false);
        props.resetUpdateData()

    }

    return (
        <>

            <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>View a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} disabled
                                onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} disabled
                                onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">User's name</label>
                            <input type="text" className="form-control" value={username}
                                onChange={(event) => { setUsername(event.target.value) }} disabled />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setRole(event.target.value)} value={role} disabled>
                                <option value="...">...</option>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'><FcPlus /> Upload File Image </label>
                            <input type='file' hidden id="labelUpload" disabled />
                        </div>

                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage}></img> :
                                <span >Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser;