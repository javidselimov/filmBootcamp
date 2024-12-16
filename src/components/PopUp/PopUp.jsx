import './PopUp.css';

export const PopUp = ({ message, onConfirm, onCancel, type }) => {
	return (
		<>
			<div className="popup-overlay">
				<div className="popup">
					<div className="popup-header">Delete {type}</div>
					<div className="popup-content">{message}</div>
					<div className="popup-buttons">
						<button className="popup-button" onClick={onConfirm}>
							Yes
						</button>
						<button className="popup-button" onClick={onCancel}>
							No
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopUp;
