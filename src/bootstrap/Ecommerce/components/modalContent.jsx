const Modal = ({ content, idModal }) => {
  return (
    <>
      <div className="modal fade" id={idModal}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
