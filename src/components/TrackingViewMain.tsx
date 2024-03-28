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

// api
import { getDeliveryInqResult } from "../api/delivery";

// lib
import { useQuery } from "react-query";

interface DetailType {
  kind: string;
  where: string;
  timeString: string;
}

interface TrackingType {
  trackingDetails: DetailType[];
}

const TrackingViewMain = () => {
  // 택배사 코드
  const [companyCode, setCompanyCode] = useState("");
  // 운송장 번호
  const [invoice, setInvoice] = useState("");
  // 시스템 활성화 (On / Off)
  const [activiteBtnSystem, setActiviteBtnSystem] = useState(true);
  // 테마
  const [colorCode, setColorCode] = useState("#6366F1");
  // 운송장 모달
  const [trackingModal, setTrackingModal] = useState(false);
  // 택배 위치 결과
  const [result, setResult] = useState<TrackingType>();

  // 사용자가 입력한 운송장번호를 저장하는 함수
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInvoice(e.target.value);

  // CompanyList(하위컴포넌트)로 부터 받아온 데이터를 state 함수에 저장
  const handleSetCompanyCode = (code: string) => setCompanyCode(code);

  // 시스템 활성화 버튼
  const handleSetSystemBtn = () => setActiviteBtnSystem((prev) => !prev);

  // 테마 색상 고르기 버튼
  const handleClickColorCode = (color: string) => setColorCode(color);

  // 운송장 모달창 State 업데이트
  const handleTrackingModal = () => setTrackingModal((prev) => !prev);

  // 조회 요청하는 함수
  const submitHandler = async () => {
    const result = await getDeliveryInqResult(companyCode, invoice);
    if (result !== undefined) {
      setTrackingModal(true);
      return setResult(result);
    }
  };

  const {
    data: _invoiceData,
    isLoading: _invoiceLoading,
    isError: _invoiceIsError,
    error: _inVoiceError,
  } = useQuery("DeliveryInvoiceResult", submitHandler, {
    enabled: false,
    refetchOnWindowFocus: false, // Window Focus Refetch
  });

  if (_invoiceLoading) return <Loading />;

  return (
    <div className={classes["tracking-view"]}>
      <Header
        handleClickColorCode={handleClickColorCode}
        colorCode={colorCode}
      />

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
              <CompanyList
                handleSetCompanyCode={handleSetCompanyCode}
                colorCode={colorCode}
              />
            </div>
            <div className={classes["tracking-view__formWrap"]}>
              <Input
                type="number"
                placeholder="운송장 번호를 입력 해주세요!"
                className="tracking-number"
                onChange={handleChangeInput}
                colorCode={colorCode}
              />
            </div>

            <div>
              <Button
                title="운송장 조회"
                className="post-btn"
                onClick={submitHandler}
                colorCode={colorCode}
                activiteBtnSystem={activiteBtnSystem}
              />
            </div>
          </>
        )}
      </div>
      {trackingModal && (
        <TrackingResult
          trackingInfo={result}
          colorCode={colorCode}
          handleTrackingModal={handleTrackingModal}
          activiteBtnSystem={activiteBtnSystem}
        />
      )}
    </div>
  );
};

export default TrackingViewMain;
