import type { FC } from "react";
import { Text } from "@telegram-apps/telegram-ui";
import { Page } from "@/components/Page.tsx";
import LoggedIn from "@/pages/auth/loggedIn/logged-in";

const HomeTab: FC = () => {
  return (
    <Page>
      <LoggedIn>
        <Text>Hello</Text>
      </LoggedIn>
    </Page>
  );
};

export default HomeTab;
