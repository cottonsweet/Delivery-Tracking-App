import React from "react";

// CSS
import classes from "./TrackingResult.module.css"

interface DetailType {
    kind: string;
    where: string;
    timeString: string;
}

interface TrackingType {
    trackingDetails: DetailType[];
}

interface Props {
    trackingInfo?: TrackingType
}

const TrackingResult = (props: Props) => {
    return (
        <div>
            {props.trackingInfo?.trackingDetails?.map((data, i) => (
                <div key={i}>
                    <div>{data.kind}</div>
                    <div>{data.where}</div>
                    <div>{data.timeString}</div>
                </div>
            ))}
        </div>
    )
}

export default React.memo(TrackingResult)