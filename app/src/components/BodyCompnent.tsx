import React, {memo, ReactElement, useState} from "react";
import { Tabs, TabList, Tab, TabPanel} from "react-tabs";
import { TabLabel } from "./TabLablel";
import { TabBody } from "./TabBody";
import "../styles/tabs.css"


export const BodyComoponent = memo(function BodyComponent(): ReactElement {

    const [tabIndex, setTabIndex] = useState(0);


    return (
        <div className="Body">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} selectedTabClassName={"Selected"}>
                <TabList className={"TabList"}>
                    <Tab className={"Tab Tab1"}>
                        <TabLabel label="Tab1" className="Tab1"/>
                    </Tab>
                    <Tab className={"Tab Tab2"}>
                        <TabLabel label="Tab2" className="Tab2"/>
                    </Tab>
                </TabList>
                <TabPanel className="Panel First">
                    <TabBody message="wow" className="Panel1"/>
                </TabPanel>
                <TabPanel className="Panel Second">
                    <TabBody message = "wow" className="Panel2"/>
                </TabPanel>
            </Tabs>
        </div>
    )

});