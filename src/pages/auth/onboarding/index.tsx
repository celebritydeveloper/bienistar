import { Text, Button } from "@telegram-apps/telegram-ui";

import { Page } from "@/components/Page.jsx";
import "./onboarding.css";

import { bem } from "@/css/bem.ts";

const [, e] = bem("onboard");


export default function OnboardingPage() {
  return (
    <Page back={false}>
      <div className={e("bg-image")}>
        <h2 className={e("title")}>Exercise.</h2>
        <h2 className={e("title")}>Earn.</h2>
        <h2 className={e("title")}>Energize.</h2>

        <div className="w-full">
          <Text className={e("sub-title")}>Get tailored made meals, exercises and earn while at it</Text>
          <Button
            size="l"
            mode="filled"
            stretched={true}
            className={e("button")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </Page>
  );
}
