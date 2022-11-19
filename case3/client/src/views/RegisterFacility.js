import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterFacility() {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    businessField: "",
    companyName: "",
    companyNPWP: 0,
    address: "",
    province: "",
    city: "",
    district: "",
    postalCode: 0,
    nib: "",
  });

  function registerFormChange(e) {
    const { name, value } = e.target;
    if (name === "files") {
      setRegister({
        ...register,
        nib: e.target.files[0],
      });
    } else {
      setRegister({
        ...register,
        [name]: value,
      });
    }
    console.log(register);
  }

  function submitRegister(){
    navigate('/account')
  }

  return (
    <>
      <div>
        <div>
          <h3>Input Data Perusahaan</h3>
          <form onSubmit={submitRegister}>
            <input
              value={register.businessField}
              onChange={registerFormChange}
              id="businessField"
              name="businessField"
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Bidang Usaha"
            />
            companyNPWP address province city district postalCode nib
            <input
              value={register.companyName}
              onChange={registerFormChange}
              id="companyName"
              name="companyName"
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Nama Perusahaan"
            />
            <input
              value={register.companyNPWP}
              onChange={registerFormChange}
              id="companyNPWP"
              name="companyNPWP"
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="NPWP Perusahaan"
            />
            <input
              value={register.address}
              onChange={registerFormChange}
              id="address"
              name="address"
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Alamat Sesuai NPWP"
            />
            <select placeholder="Provinsi">
              <option disabled selected></option>
              <option></option>
            </select>
            <select placeholder="Kota/Kabupaten">
              <option disabled selected></option>
              <option></option>
            </select>
            <select placeholder="Kecamatan">
              <option disabled selected></option>
              <option></option>
            </select>
            <input
              value={register.postalCode}
              onChange={registerFormChange}
              id="postalCode"
              name="postalCode"
              type="number"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Kode Pos"
            />
            <h3>Upload Kelengkapan Data</h3>
            <div>
              <h1>React File Upload</h1>
              <input name="files" type="file" onChange={registerFormChange} />
            </div>
            <button 
            // type="submit" 

            >Selanjutnya</button>
          </form>
        </div>
      </div>
    </>
  );
}

//  ===========================================
/*
const [file, setFile] = useState();

function handleChange(event) {
  setFile(event.target.files[0]);
}

function handleSubmit(event) {
  event.preventDefault();
  const url = "http://localhost:3003/uploadFile";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  axios.post(url, formData, config).then((response) => {
    console.log(response.data);
  });
}

return (
  <div className="App">
    <form onSubmit={handleSubmit}>
      <h1>React File Upload</h1>
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload</button>
    </form>
  </div>
);
*/
