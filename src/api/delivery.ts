
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = "https://info.sweettracker.co.kr/api/v1";

// 택배사 모든 데이터 불러오기
export const getAllCompanyList = async () => {
    const deliveryCompany = `${BASE_URL}/companylist?t_key=${API_KEY}`
    const data = await fetch(deliveryCompany);
    const _json = await data.json();
    return _json
}