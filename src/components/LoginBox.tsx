import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import btn_login_kakao from "../assets/images/btn_login_kakao.png";
import skku_logo from "../assets/images/skku_logo.png";
import vaiv_logo from "../assets/images/vaiv_logo.png";


const LoginBoxContainer = styled.div`
    flex-direction: column;
    background-color: #f7f7f7;
    width: 40vw;
    height: 36vh;
    border-radius: 1vw;
    display: flex;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
`
const LogoContainer = styled.div`
    diplay: flex;
    flex-direction: column;
    padding-bottom: 2.5vh;
`


const VaivImageContainer = styled.div`
    display:flex;
    height: 12vh;
    justify-content: center;
    padding-top: 3vh;
    padding-bottom: 2vh;
`
const SkkuImageContainer = styled.div`
    display:flex;
    height: 4vh;
    padding-left:1vw;
    padding-top:1vh;
`

const KakaoImageContainer = styled.div`
    display:flex;
    height: 12vh;
    justify-content: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
`


function LoginBox() {
    return(
        <LoginBoxContainer>
            <LogoContainer>
                <SkkuImageContainer>
                    <img src={skku_logo}></img>
                </SkkuImageContainer>
                <VaivImageContainer>
                    <img src={vaiv_logo}></img>
                </VaivImageContainer>
            </LogoContainer>
            <LogoContainer>
                <KakaoImageContainer>
                    <img src={btn_login_kakao}></img>
                </KakaoImageContainer>
            </LogoContainer>
        </LoginBoxContainer>
    );
}


export default LoginBox;