import classes from "./alert-dialog.module.scss";

interface IAlertDialog {
  backdropMessage: string;
  btnClickHandler: () => void;
}

export default function AlertDialog({
  backdropMessage,
  btnClickHandler,
}: IAlertDialog) {
  return (
    <div className={classes["alert-dialog"]}>
      <p>{backdropMessage}</p>
      <button className="btn" onClick={btnClickHandler}>
        Ok
      </button>
    </div>
  );
}
