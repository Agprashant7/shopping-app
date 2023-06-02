import React, { useState } from "react";
import { InputField } from "./sacomponents/Input/Input";
import EmptyCart from "../assets/cart.svg";
import { AiFillHeart } from "react-icons/ai";
import { COLORS } from "../themes/Color";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    passwod: "",
  });

  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-2/4 flex flex-col items-center justify-center">
        <div className="w-2/4">
          <h5 className="text-3xl text-amber-500 font-medium">
            Welcome <span className="text-black">to Shoppingify! </span>
          </h5>
          <p className="text-sm font-normal text-black">
            Shoppingify allows you take your shopping list wherever you go.
          </p>
          <div className="my-8">
            <InputField
              label={"Name"}
              value={signUpInfo.name}
              name={"name"}
              placeholder={"Enter your name"}
              style={{ borderColor: "#f59e0b", padding: 20, borderWidth: 2 }}
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, name: e.target.value })
              }
            />
          </div>
          <div className="my-8">
            <InputField
              label={"Email"}
              value={signUpInfo.email}
              name={"name"}
              placeholder={"Enter your email"}
              style={{ borderColor: "#f59e0b", padding: 20, borderWidth: 2 }}
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, email: e.target.value })
              }
            />
          </div>
          <div className="my-8">
            <InputField
              label={"Password"}
              type={"password"}
              value={signUpInfo.passwod}
              name={"name"}
              placeholder={"Enter your password"}
              style={{ borderColor: "#f59e0b", padding: 20, borderWidth: 2 }}
              onChange={(e) =>
                setSignUpInfo({ ...signUpInfo, passwod: e.target.value })
              }
            />
          </div>
          <div className="mt-8 mb-4">
            <button className="bg-amber-500 w-full p-5 rounded-lg text-white text-base font-medium">
              Sign up
            </button>
          </div>
          <div className="my-6 text-center">
            <p className="text-sm font-normal">
              Already have an account?{" "}
              <span
                className="font-medium text-black cursor-pointer"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/4 bg-[#FFF0DE] flex flex-col">
        <span className="w-10 h-10 rounded-3xl bg-black items-center justify-center flex m-6 cursor-pointer">
          <AiFillHeart size={20} color={COLORS.orange} />
        </span>
        <div className="flex items-center justify-center h-[80%]">
          <img src={EmptyCart} className="w-[55%]" />
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default SignUp;
