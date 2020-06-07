import React from 'react';
import ReactModal from 'react-modal';
import GameOver from './SVGs/GameOver';
import Win from './SVGs/Win';

const Modal = ({showModal, closeModal, modalContent, score, flips}) => {
    return (                 
        <ReactModal
            isOpen={showModal}
            contentLabel="Information"
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: "rgb(192, 202, 171, 0.75)"
                },
                content: {
                    background: "darkolivegreen",
                    color: "yellow",
                    width: '500px',
                    height: '250px',
                    padding: '10px 10px 0px 0px',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'                            
                }
            }}
        >
            <div id="close-div" onClick={closeModal}>
                <i id="close" className="fas fa-times" />
            </div>
            <div>
                {modalContent === 'over' ? <GameOver /> : <Win score={score} flips={flips} />}
            </div>
        </ReactModal>
    );
}
 
export default Modal;