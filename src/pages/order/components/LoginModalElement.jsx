import Button from "../../../commons/components/Button/Button.jsx";
import PropTypes from "prop-types";
import {useState} from "react";
import {checkOTP, sendOTP} from "../userInfoManager/userInfoManager.js";

LoginModalElement.propTypes = {
    onFinish : PropTypes.func
}

function LoginModalElement({onFinish}){
    const [emailButton, setEmailButton] = useState(true);
    const [emailButtonDelay, setEmailButtonDelay] = useState(false);
    const [numberButton, setNumberButton] = useState(true)

    const [userMail, setUserMail] = useState("");
    const [number, setNumber] = useState("");

    const [timeCount, setTimeCount] = useState(10);

    const validateEmail = event => {
        const value = event.target.value;
        const regex = /^\S+@\S+\.\S+$/;

        setEmailButton(!regex.test(value));
        setUserMail(value);
    }

    const validateNumber = event => {
        const value = event.target.value;
        if(value.length > 6){
            return;
        }

        setNumberButton(value.length !== 6);
        setNumber(value);
    }

    const loginMailSend = ()=>{
        /* 메일보내기 함수() */
        sendOTP(userMail)
            .then(data => {
                if(data !== "success"){
                    alert("메일 보내기 실패,\n 잠시 후 다시 시도해주세요");
                }
            });

        /* 메일 보낸 이후 */
        const interval = setInterval(()=>{
            setTimeCount(prev => {
                if(prev === 1) {
                    clearInterval(interval);
                    setEmailButtonDelay(false);
                    return 60;
                }

                return prev - 1;
            });
        }, 1000);
        setEmailButtonDelay(true);
    }

    const checkNumber = ()=>{
        checkOTP(userMail, number)
            .then(data => {
                console.log(data);
                if(data.result === "success"){
                    console.log("성?공");
                    onFinish(data.user);
                } else {
                    console.log("실?패");
                    console.log(data.result);
                }
            })
    }

    return (
        <div className={"grid grid-cols-6 p-5 gap-y-5"}>
            <input type={"text"}
                   className={"col-span-4"}
                   value={userMail}
                   onChange={validateEmail}
                   placeholder={"이메일을 입력해주세요"}
            />
            <Button onClick={loginMailSend} className={"col-span-2"} option={(emailButton || emailButtonDelay)? "disabled" : "default"}>
                {emailButtonDelay? timeCount : "인증번호 전송"}
            </Button>

            <input type={"text"}
                   className={"col-span-4"}
                   value={number}
                   onChange={validateNumber}
                   placeholder={"인증번호를 입력해주세요"}
            />
            <Button onClick={checkNumber} className={"col-span-2"} option={numberButton? "disabled" : "default"}>인증번호 확인</Button>
        </div>
    )
}

export default LoginModalElement;
