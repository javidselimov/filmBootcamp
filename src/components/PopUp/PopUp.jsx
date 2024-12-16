/* eslint-disable react/prop-types */
import "./PopUp.css";
import deleteSvg from "../../assets/svg/delete.svg";
import checkSvg from "../../assets/svg/check.svg";

const PopUp = ({ setPopUp, isMovie, confirmDelete }) => {
  const handleExit = () => {
    setPopUp(false);
  };

  return (
    <div className="popUp-container">
      <div className="pop-up">
        {isMovie ? (
          <>
            <p>Are you sure you want to delete this movie?</p>
            <div className="buttons">
              <img
                className="x"
                src={deleteSvg}
                onClick={handleExit}
                alt="Cancel"
              />
              <img
                className="check"
                src={checkSvg}
                onClick={() => {
                  confirmDelete();
                  handleExit();
                }}
                alt="Confirm"
              />
            </div>
          </>
        ) : (
          <>
            <p>Are you sure you want to delete this list?</p>
            <div className="buttons">
              <img
                className="x"
                src={deleteSvg}
                onClick={handleExit}
                alt="Cancel"
              />
              <img
                className="check"
                src={checkSvg}
                onClick={() => {
                  confirmDelete();
                  handleExit();
                }}
                alt="Confirm"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PopUp;
