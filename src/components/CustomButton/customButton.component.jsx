import "./customButton.styles.css";

const CustomButton = ({ onOpen }) => {
  return (
    <button onClick={onOpen} className="btn">
      Add Your First Collection
    </button>
  );
};

export default CustomButton;
