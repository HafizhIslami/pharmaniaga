import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../stores/actions/usersAction";

export default function Register() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });

  const onChangeRegister = (event) => {
    const { name, value } = event.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const onSubmitNewAdminHandler = (event) => {
    event.preventDefault();

    // const data = {
    //   ...registerForm,
    //   role: "Admin",
    // };
    navigate(`/login`);
    // dispatch(registerUser(data))
    //   .then((data) => {})
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <form onSubmit={onSubmitNewAdminHandler}>
        <div className="flex flex-col shrink space-y-3">
          <label for="username">
            <p className="font-medium text-left text-slate-700 pb-2">
              Username
            </p>
            <input
              type="text"
              name="username"
              value={registerForm.username}
              onChange={onChangeRegister}
              id="username"
              className="w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter username"
            />
          </label>
          <label for="email">
            <p className="font-medium text-left text-slate-700 pb-2">Email</p>
            <input
              value={registerForm.email}
              onChange={onChangeRegister}
              id="email"
              name="email"
              type="email"
              className="w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
            />
          </label>
          <label for="password">
            <p className="font-medium text-left text-slate-700 pb-2">
              Password
            </p>
            <input
              value={registerForm.password}
              onChange={onChangeRegister}
              id="password"
              name="password"
              type="password"
              className="w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter your password"
            />
          </label>
          <label for="phoneNumber">
            <p className="font-medium text-left text-slate-700 pb-2">
              Phone Number
            </p>
            <input
              value={registerForm.phoneNumber}
              onChange={onChangeRegister}
              id="phoneNumber"
              name="phoneNumber"
              type="phoneNumber"
              className="w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter your phone number"
            />
          </label>
          <div className="flex flex-row justify-between"></div>
          <button
            type="submit"
            className="w-full py-1 font-bold text-white bg-[rgba(254,185,19,1)] hover:bg-[#fe8513] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            <span>Register</span>
          </button>
        </div>
      </form>
    </>
  );
}
