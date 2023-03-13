import { useEffect, useState } from 'react'

interface CompanyType  {
  Code: string;
  International: string;
  Name: string;
};

interface Company  {
  Company: CompanyType[];
};

function App() {
  const [companyList, setCompanyList] = useState<Company>()


  useEffect(() => {
    getCompanyList()
  },[])

  const getCompanyList = async() => {
    const data = await fetch("https://info.sweettracker.co.kr/api/v1/companylist?t_key=fwM3wePoMWuqF5k3n1f30Q")
    const json = await data.json()
    setCompanyList(json)
  }


  return (
    <div className="App">
      <select>
        {companyList?.Company?.map((data, i) => (
          <option key={i}>{data.Name}</option>
        ))}
      </select>
    </div>
  )
}

export default App
