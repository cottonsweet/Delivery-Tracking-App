import React, { useState } from "react";

// CSS
import classes from "./TrackingViewMain.module.css";

// Components
import Header from "./Header/Header";
import CompanyList from "./Company/CompanyList";
import Input from "./Input/Input";
import TrackingResult from "./Tracking/TrackingResult";
import Title from "./Header/Title";
import Button from "./Button/Button";
import Loading from "./Loading/Loading";

const TrackingViewMain = () => {
  const [companyCode, setCompanyCode] = useState("");
  const [invoice, setInvoice] = useState("");
  const [trackingInfo, setTrackingInfo] = useState();
  const [activiteBtnSystem, setActiviteBtnSystem] = useState(true);
  const [colorCode, setColorCode] = useState("#6366F1");
  const [trackingModal, setTrackingModal] = useState(false);
  const [loading, setLoading] = useState(false)

  const BASE_URL = "https://info.sweettracker.co.kr/api/v1";
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  // 사용자가 입력한 운송장번호를 저장하는 함수
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoice(e.target.value);
  };

  // 조회 요청하는 함수
  const submitHandler = async () => {
    setLoading(true)
    const data = await fetch(`${BASE_URL}/trackingInfo?t_code=${companyCode}&t_invoice=${invoice}&t_key=${API_KEY}`);
    const json = await data.json();
    setLoading(false)
    setTrackingInfo(json);
    if (companyCode === "") return alert("택배사를 선택 해주셔야 합니다.");
    if (json.status === false) return alert("운송장 번호가 유효하지 않습니다.");
    setTrackingModal(true);
    return
  };

  // CompanyList(하위컴포넌트)로 부터 받아온 데이터를 state 함수에 저장
  const handleSetCompanyCode = (code: string) => setCompanyCode(code);

  // 시스템 활성화 버튼
  const handleSetSystemBtn = () => setActiviteBtnSystem((prev) => !prev);

  // 테마 색상 고르기 버튼
  const handleClickColorCode = (color: string) => setColorCode(color);

  // 운송장 결과 출력 버튼
  const handleTrackingModal = () => setTrackingModal((prev) => !prev);


  return (
    <div className={classes["tracking-view"]}>
      {loading && <Loading />}
      <Header handleClickColorCode={handleClickColorCode} colorCode={colorCode} />

      <div className={classes["tracking-view__container"]}>
        <div className={classes["tracking-view__system"]}>
          <Title title="시스템 활성화" className="tracking-system-onoff" />
          <Button
            title={activiteBtnSystem ? "On" : "Off"}
            className="system-btn"
            onClick={handleSetSystemBtn}
            colorCode={colorCode}
            activiteBtnSystem={activiteBtnSystem}
          />
        </div>

        {activiteBtnSystem && (
          <>
            <div className={classes["tracking-view__select"]}>
              <CompanyList handleSetCompanyCode={handleSetCompanyCode} colorCode={colorCode} />
            </div>
            <div className={classes["tracking-view__formWrap"]}>
              <Input type="number" placeholder="운송장 번호를 입력 해주세요!" className="tracking-number" onChange={handleChangeInput} colorCode={colorCode} />
            </div>

            <div>
              <Button title="운송장 조회" className="post-btn" onClick={submitHandler} colorCode={colorCode} activiteBtnSystem={activiteBtnSystem} />
            </div>
          </>
        )}
      </div>
      {trackingModal && (
        <TrackingResult trackingInfo={trackingInfo} colorCode={colorCode} handleTrackingModal={handleTrackingModal} activiteBtnSystem={activiteBtnSystem} />
      )}
    </div>
  );
};

export default TrackingViewMain;
