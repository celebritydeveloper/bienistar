import type { FC } from "react";
import { Avatar, Button, List, Text } from "@telegram-apps/telegram-ui";
import { Page } from "@/components/Page.tsx";
import LoggedIn from "@/pages/auth/loggedIn/logged-in";
import "./index.css";
import "../../../index.css"

import { bem } from "@/css/bem.ts";

const [, e] = bem("earn");


const EarnTab: FC = () => {
  return (
    <Page>
      <LoggedIn>
        <div   className="page tasks-page">
          <div className="header">
            <span className="title">Earn <sup data-v-8d39a879="">155</sup></span>
          </div>

          <div className="kit-tabs-inline is-fully-left-scrolled">
            <div className="shadow left-shadow"></div>
            <div className="shadow right-shadow"></div>
            <div className="content">
              <div className="list">
                <div className="start"></div>
                <label className="tab is-active show-dot" data-tab="Socials">
                  <span className="label">Socials</span>
                  {/* <div className="dot"></div> */}
                  <input type="radio" name="2c37d06f-2720-4592-bad8-8dd85090ea1b" value="Socials" />
                </label>
                <label className="tab show-dot" data-tab="OnChain">
                  <span className="label">OnChain</span>
                  {/* <div className="dot"></div> */}
                  <input type="radio" name="2c37d06f-2720-4592-bad8-8dd85090ea1b" value="OnChain" />
                </label>
                <label className="tab show-dot" data-tab="Academy">
                  <span className="label">Academy</span>
                  {/* <div className="dot"></div> */}
                  <input type="radio" name="2c37d06f-2720-4592-bad8-8dd85090ea1b" value="Academy" />
                </label>
                <label className="tab show-dot" data-tab="Blum Bits">
                  <span className="label">Blum Bits</span>
                  {/* <div className="dot"></div> */}
                  <input type="radio" name="2c37d06f-2720-4592-bad8-8dd85090ea1b" value="Blum Bits" />
                </label>
                <label className="tab" data-tab="Frens">
                  <span className="label">Frens</span>
                  {/* <div className="dot"></div> */}
                  <input type="radio" name="2c37d06f-2720-4592-bad8-8dd85090ea1b" value="Frens" />
                </label>
                <label className="tab show-dot" data-tab="Farming">
                  <span className="label">Farming</span>
                  {/* <div className="dot"></div> */}
                  <input type="radio" name="2c37d06f-2720-4592-bad8-8dd85090ea1b" value="Farming" />
                </label>
                <div className="end"></div>
              </div>
            </div>
          </div>
          <List>
            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>

            <div   className="flex items-center gap-3 w-full">
              <Avatar size={48} />
              <div   className="flex items-center justify-between w-full border-b border-[#282828] pb-2">
                <div   className="flex flex-col">
                  <Text   className={e("item-title")}>Jumping Jacks</Text>
                  <span   className={e("item-subtitle")}>100 BIEN</span>
                  <span   className={e("item-description")}>5 Minutes</span>
                </div>
                <Button   className={e("start-button")}>Start</Button>
              </div>
            </div>
          </List>
        </div>
        
      </LoggedIn>
    </Page>
  );
};

export default EarnTab;
