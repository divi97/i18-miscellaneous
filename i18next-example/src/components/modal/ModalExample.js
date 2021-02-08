import React, { useState } from 'react'
import Modal from 'react-modal'
// import './Modal.scss'

Modal.setAppElement('#root')

function ModalExample() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setModalIsOpen(true)} >Modal Kholo!!</button>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                shouldCloseOnOverlayClick={false}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'orange'
                        }
                    }
                }
                >
                <h1>Modal Title</h1>
                <p> Modal Body </p>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
                </div>
            </Modal>

        </div >
    )
}

export default ModalExample

