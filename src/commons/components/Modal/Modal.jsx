import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Button from "../Button/Button.jsx";


const customModalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100vh",
        zIndex: 10,
        position: "fixed",
        top: 0,
        left: 0,
    },
    content: {
        height: "calc(50vh)",
        zIndex: 150,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
    },
};


Modal.propTypes = {
    children: PropTypes.node,
    onRequestClose: PropTypes.func,
    isOpen: PropTypes.bool
}

function Modal({isOpen, children, onRequestClose }){

    // 모달을 닫을 때 onRequestClose 함수 호출
    const closeModal = () => {
        onRequestClose();
    };

    return (
        <ReactModal
            isOpen={isOpen}
            style={customModalStyles}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            appElement={document.getElementById('root')}
            className="!w-full md:!w-[40vw]"
        >
            <div className="modal-content">
                {children}
                <Button onClick={closeModal}>닫기</Button>
            </div>
        </ReactModal>
    );
}

export default Modal;
