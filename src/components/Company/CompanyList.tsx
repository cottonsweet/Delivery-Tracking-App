// React
import React from "react";

// CSS
import classes from "./CompanyList.module.css";

// api
import { getAllCompanyList } from "../../api/delivery";

// lib
import { useQuery } from "react-query";

// Components
import Loading from "../Loading/Loading";

interface CompanyType {
  Company: {
    Code: string;
    International: string;
    Name: string;
  }[];
}

interface Props {
  handleSetCompanyCode: (code: string) => void;
  colorCode: string;
}

const CompanyList = (props: Props) => {
  /** 택배사 회사 리스트 불러오는 함수 */
  const getCompanyList = async (): Promise<CompanyType> =>
    await getAllCompanyList();

  const {
    data: _comData,
    isLoading: _comLoading,
    isError: _comIsError,
    error: _comError,
  } = useQuery("company", getCompanyList);

  /** 선택한 택배사 코드 저장하는 함수 */
  const handleChangeCompanyCode = (e: React.ChangeEvent<HTMLSelectElement>) =>
    props.handleSetCompanyCode(e.target.value);

  // 로딩컴포넌트 반환
  if (_comLoading) return <Loading />;

  return (
    <select
      onChange={handleChangeCompanyCode}
      className={classes["company-select"]}
      style={{ border: "1px solid" + props.colorCode }}
    >
      <option>없음</option>
      {_comData?.Company?.map((data, i) => (
        <option key={i} value={data.Code}>
          {data.Name}
        </option>
      ))}
    </select>
  );
};

export default CompanyList
