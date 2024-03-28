import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes["Loading-wrap"]}>
      <div className={classes["container"]}>
        <div className={classes["circle-container"]}>
          <div className={classes["circle"]}></div>
        </div>
        <div className={classes["circle-container"]}>
          <div className={classes["circle"]}></div>
        </div>
        <div className={classes["circle-container"]}>
          <div className={classes["circle"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
