// CSS
import classes from "./TrackingResult.module.css";

// Components
import Button from "../Button/Button";

interface DetailType {
  kind: string;
  where: string;
  timeString: string;
}

interface Props {
  trackingInfo?: any;
  colorCode: string;
  activiteBtnSystem: boolean;
  handleTrackingModal: () => void;
}

const TrackingResult = (props: Props) => {
  const closeModal = () => props.handleTrackingModal();

  return (
    <div className={classes["tracking-result"]}>
      <div className={classes["tracking-result__container"]}>
        <div
          className={classes["tracking-result__header"]}
          style={{ backgroundColor: props.colorCode }}
        >
          <div>현황</div>
          <div>위치</div>
          <div>시간</div>
        </div>
        {props.trackingInfo?.trackingDetails?.map((data: DetailType) => (
          <div key={data.kind} className={classes["tracking-result__data"]}>
            <div>{data.kind}</div>
            <div>{data.where}</div>
            <div>{data.timeString}</div>
          </div>
        ))}
      </div>
      <Button
        title="닫기"
        className="close-btn"
        colorCode={props.colorCode}
        onClick={closeModal}
        activiteBtnSystem={props.activiteBtnSystem}
      />
    </div>
  );
};

export default TrackingResult;
