import "./createNewCollection.style.css";

const CreateNewCollection = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal-title">
          <p>Add Collection</p>
        </div>
        <div className="body">
          <p>Name</p>
          <input
            className="collection-input"
            type="text"
            placeholder="My Collection"
          />
        </div>
        <div className="footer">
          <button className="createBtn">Create</button>
          <button className="cancelBtn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCollection;
