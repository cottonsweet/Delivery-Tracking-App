import { useEffect, useState } from "react";

interface CompanyType {
  Code: string;
  International: string;
  Name: string;
}

interface Company {
  Company: CompanyType[];
}

interface Details {
  kind: string;
  where: string;
  timeString: string;
}

interface Tracking {
  trackingDetails: Details[];
}

const App = () => {
  const [companyList, setCompanyList] = useState<Company>();
  const [companyCode, setCompanyCode] = useState("");
  const [invoice, setInvoice] = useState("");
  const [traking, setTraking] = useState<Tracking>();

  useEffect(() => {
    getCompanyList();
  }, []);

  const BASE_URL = "http://info.sweettracker.co.kr/api/v1";
  const API_KEY = "fwM3wePoMWuqF5k3n1f30Q";

  const getCompanyList = async () => {
    const data = await fetch(`${BASE_URL}/companylist?t_key=${API_KEY}`);
    const json = await data.json();
    setCompanyList(json);
  };

  // 선택한 택배사 코드 저장하는 함수
  const handleChangeCompanyCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCompanyCode(e.target.value);
    console.log(e.target.value);
  };

  // 사용자가 입력한 운송장번호를 저장하는 함수
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoice(e.target.value);
    console.log(e.target.value);
  };

  // 조회 요청하는 함수
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await fetch(`${BASE_URL}/trackingInfo?t_code=${companyCode}&t_invoice=${invoice}&t_key=${API_KEY}`);
    const json = await data.json();
    if (companyCode === "") return alert("택배사 선택해야함 ㅇㅇ");
    if (json.status === false) return alert("유효하지않음 ㅅㄱ");
    setTraking(json);
    console.log(json);
  };

  return (
    <div className="App">
      <center>
        <select onChange={handleChangeCompanyCode}>
          <option>없음</option>
          {companyList?.Company?.map((data, i) => (
            <option key={i} value={data.Code}>
              {data.Name}
            </option>
          ))}
        </select>

        <br></br>
        <br></br>
        <br></br>

        <form onSubmit={submitHandler}>
          <input type="number" placeholder="운송장번호를 입력해주세요" onChange={handleChangeInput} />
        </form>

        <div>
          {traking?.trackingDetails?.map((data, i) => (
            <div key={i}>
              <div>{data.kind}</div>
              <div>{data.where}</div>
              <div>{data.timeString}</div>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default App;
