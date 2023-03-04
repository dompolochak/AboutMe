import React, {memo, ReactElement, useState} from "react";
import { Tabs, TabList, Tab, TabPanel} from "react-tabs";
import "../styles/body.css"


export const BodyComoponent = memo(function BodyComponent(): ReactElement {

    const [tabIndex, setTabIndex] = useState(0);


    return (
        <>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} selectedTabClassName={"Selected"}>
                <TabList className={"TabList"}>
                    <Tab className={"Tab"}>
                        <div>
                            <span>Tab1</span>
                        </div>
                    </Tab>
                    <Tab className={"Tab"}>
                        <div>
                            <span>Tab2</span>
                        </div>
                    </Tab>
                </TabList>
                <TabPanel><p>WOOOOW</p></TabPanel>
                <TabPanel><p>AMAZING</p></TabPanel>
            </Tabs>
        </>
    )

});