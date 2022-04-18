export default function SignHeader({ heading }) {
  return (
    <div className="sign__header">
      <div className="text-center">{heading}</div>
      <div className="sign__close">
        <img className="sign__close__img" src="images/icons/close.svg" alt="" />
      </div>
    </div>
  );
}
