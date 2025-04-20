import MobileNav from "@/components/layout/MobileNav";
import React, { useState, FC, ReactNode, ReactElement } from "react";
//import * as Components from "../../components";
// import { NotificationContext } from "../../context/notification-context";
// import { RewardContext } from "../../context/daily-reward-context";
// import useRequest from "../../api/useRequest";
// import { createGetUserRequest } from "../../api/requestFactory/user";
import "../../../index.css";





const LoggedIn = (props: { children: ReactNode | ReactNode[] }) => {
  // const { requestMaker } = useRequest();
  // const { notification, hideNotification } = useContext(NotificationContext);
  // const { reward, hideReward } = useContext(RewardContext);
  const [userAccountStatus, setUserAccountStatus] = useState(true);

  // useEffect(() => {
  //   requestMaker(createGetUserRequest())
  //     .then((response) => {
  //       setUserAccountStatus(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [requestMaker]);

  return (
    <React.Fragment>
      {userAccountStatus && (
        <React.Fragment>
          {/* <Components.DailyRewardModal
            payload={reward.payload}
            show={reward.show}
            onClose={hideReward}
          ></Components.DailyRewardModal>
          <Components.Notification
            message={notification.message}
            type={notification.type}
            show={notification.show}
            onClose={hideNotification}
          ></Components.Notification> */}
            <main className="" id="app">
              {props.children}
            </main>
          <MobileNav />
          {/* <Components.GlobalLoader></Components.GlobalLoader> */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default LoggedIn;
