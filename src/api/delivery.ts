const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = "https://info.sweettracker.co.kr/api/v1";

// 택배사 모든 데이터 불러오기
export const getAllCompanyList = async () => {
  const deliveryCompany = `${BASE_URL}/companylist?t_key=${API_KEY}`;
  const data = await fetch(deliveryCompany);
  const _json = await data.json();
  return _json;
};

interface DetailType {
  kind: string;
  where: string;
  timeString: string;
}

interface TrackingType {
  trackingDetails: DetailType[];
}

// 배송조회 결과
export const getDeliveryInqResult = async (
  companyCode: string,
  invoice: string
) => {
  if (companyCode === "") return alert("택배사를 선택 해주셔야 합니다.");

  const data = await fetch(
    `${BASE_URL}/trackingInfo?t_code=${companyCode}&t_invoice=${invoice}&t_key=${API_KEY}`
  );
  const _json = await data.json();
  if (_json.status === false) return alert(_json.msg);
  return _json;
};
