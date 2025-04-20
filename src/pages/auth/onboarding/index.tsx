import { Section, Cell, Image, List, LargeTitle } from "@telegram-apps/telegram-ui";

import { Page } from "@/components/Page.jsx";

import tonSvg from "./ton.svg";

export default function OnboardingPage() {
  return (
    <Page back={false}>
      <div  className="bg-image h-screen pb-5 px-5">
        <LargeTitle
          weight="2"
          plain={false}
          className="uppercase"
        >
          Exercise.
        </LargeTitle>
        <LargeTitle
          weight="2"
          plain={false}
          className="uppercase pl-2"
        >
          Eat.
        </LargeTitle>
        <LargeTitle
          weight="2"
          plain={false}
          className="uppercase"
        >
          Energize.
        </LargeTitle>
      </div>
    </Page>
  );
}
