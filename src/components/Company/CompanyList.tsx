import React, { useState, useEffect } from "react";

// CSS
import classes from "./CompanyList.module.css";
import Loading from "../Loading/Loading";

interface CompanyListType {
  Code: string;
  International: string;
  Name: string;
}

interface CompanyType {
  Company: CompanyListType[];
}

interface Props {
  handleSetCompanyCode: (code: string) => void;
  colorCode: string;
}

const CompanyList = (props: Props) => {
  const [companyList, setCompanyList] = useState<CompanyType>();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCompanyList();
  }, []);

  const BASE_URL = "https://info.sweettracker.co.kr/api/v1";
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  /** 택배사 회사 리스트 불러오는 함수 */
  const getCompanyList = async () => {
    setLoading(true)
    const data = await fetch(`${BASE_URL}/companylist?t_key=${API_KEY}`);
    const json = await data.json();
    setCompanyList(json);
    setLoading(false)
  };

  /** 선택한 택배사 코드 저장하는 함수 */
  const handleChangeCompanyCode = (e: React.ChangeEvent<HTMLSelectElement>) => props.handleSetCompanyCode(e.target.value);

  // 로딩컴포넌트 반환
  if (loading) return <Loading />

  return (
    <select onChange={handleChangeCompanyCode} className={classes["company-select"]} style={{ border: "1px solid" + props.colorCode }}>
      <option>없음</option>
      {companyList?.Company?.map((data, i) => (
        <option key={i} value={data.Code}>
          {data.Name}
        </option>
      ))}
    </select>
  );
};

export default React.memo(CompanyList);
