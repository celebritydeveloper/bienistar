import { Text, Button } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";

import { Page } from "@/components/Page.jsx";
import "./onboarding.css";

import { bem } from "@/css/bem.ts";

const [, e] = bem("onboard");


export default function OnboardingPage() {
  const navigate = useNavigate();

  return (
    <Page back={false}>
      <div className={e("bg-image")}>
        <h2 
          style={{ color: "white", fontFamily: "NeuBlack", textTransform: "uppercase",
            fontSize: "50px",
            lineHeight: 1.2}}
        >
        Exercise.</h2>
        <h2
          style={{ color: "white", fontFamily: "NeuBlack", textTransform: "uppercase",
            fontSize: "50px",
            lineHeight: 1.2}}
        >Earn.</h2>
        <h2
          style={{ color: "white", fontFamily: "NeuBlack", textTransform: "uppercase",
            fontSize: "50px",
            lineHeight: 1.2}}
        >Energize.</h2>

        <div className="w-full">
          <Text style={{color: "white",
              fontFamily: "NueRegular",
              fontSize: "16px"}}>Get tailored made meals, exercises and earn while at it</Text>
          <Button
            size="l"
            mode="filled"
            stretched={true}
            style={{
              backgroundColor: "white",
              fontSize: "16px",
              height:" 60px",
              marginTop: "20px"}}
            onClick={() => navigate("/tabs/home")}
            type="button"
          >
            <Text style={{color: "black",
              fontFamily: "NueBold",
              fontSize: "18px"}}>Get Started</Text>
          </Button>
        </div>
      </div>
    </Page>
  );
}
