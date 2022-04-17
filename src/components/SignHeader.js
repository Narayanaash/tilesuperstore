export default function SignHeader({ heading, setShowSignPopUp }) {
  return (
    <div className="sign__header">
      <div className="text-center">{heading}</div>
      <div className="sign__close" onClick={() => setShowSignPopUp(false)}>
        <img src="images/icons/close.svg" alt="" />
      </div>
    </div>
  );
}
