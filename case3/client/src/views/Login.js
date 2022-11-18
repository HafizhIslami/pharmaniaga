import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../stores/actions/usersAction";
// import genji from "../assets/genji-sushi-yellow.png";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // State Form Login
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  // onChange Login Form
  function loginFormChange(e) {
    const { name, value } = e.target;
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    navigate("/");
    // const data = loginInput;
    // dispatch(loginUser(data))
    //   .then((data) => {
    //     localStorage.setItem("access_token", data.access_token);
    //     localStorage.setItem("user_id", data.user_id);
    //     localStorage.setItem("email", data.email);
    //     localStorage.setItem("role", data.role);
    //     console.log("Success login admin : ", {
    //       email: data.email,
    //     });
    //     navigate(`/`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <>
      <div>
        {/* <img
          src={genji}
          width="200"
          className="inline-block bg-[rgba(254,185,19,1)]"
        /> */}
        <div>
          <h1 className="text-4xl font-medium mb-10">
            Selamat Datang di Solusi Perangkat Lunak Farmasi
          </h1>
          <h1 className="text-4xl font-medium mb-10">
            Sistem Manajemen Apotek Online
          </h1>
        </div>
        <div className="max-w-sm mx-auto my-14 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium mb-10">
            Silahkan masuk ke dalam akun anda dan kelola apotek Anda
          </h1>

          {/* <div className="my-2">
        <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            className="w-6 h-6"
            alt=""
          />
          <span>Login with Google</span>
        </button>
      </div>
      <h1 className="font-medium text-lg text-center">Or</h1> */}

          <form action="" className="my-5" onSubmit={submitHandler}>
            <div className="flex flex-col space-y-5">
              <label for="email">
                <p className="font-medium text-left text-slate-700 pb-2">
                  Email
                </p>
                <input
                  value={loginInput.email}
                  onChange={loginFormChange}
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </label>
              <label for="password">
                <p className="font-medium text-left text-slate-700 pb-2">
                  Password
                </p>
                <input
                  value={loginInput.password}
                  onChange={loginFormChange}
                  id="password"
                  name="password"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter your password"
                />
              </label>
              <div className="flex flex-row justify-between"></div>
              <button
                type="submit"
                className="w-full py-3 font-bold text-white bg-[rgba(254,185,19,1)] hover:bg-[#fe8513] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                <span>Masuk</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h4>
                Belum memiliki akun?
                <a href='/register'>Register sekarang</a>
              </h4>
            </div>
          </form>
        </div>
        <footer className="text-slate-500 font-semibold">
          Created by Hafizh
        </footer>
      </div>
    </>
  );
}
