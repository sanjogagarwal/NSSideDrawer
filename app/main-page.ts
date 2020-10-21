/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, GestureEventData, GesturesObserver, GestureTypes, Page, TouchGestureEventData, View } from '@nativescript/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "@nativescript/core/application/application";
// Event handler for Page 'navigatingTo' event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = <Page>args.object;
    let testView = <View> page.getViewById("testView");
    // const touchObserver = new GesturesObserver(testView, (args: GestureEventData) => {
    //     let action = (args as TouchGestureEventData).action;
    //     if (action === 'down') {
    //         testView.className = 'onPressStyle';
    //     } else if (action === 'up') {
    //         testView.className = undefined;
    //     }
    // }, this);
    // touchObserver.observe(GestureTypes.touch);
    testView.on('touch', (args) => {
        let action = (args as TouchGestureEventData).action;
        if (action === 'down') {
            console.log('-----Down------');
            testView.className = 'onPressStyle';
        } else if (action === 'up') {
            console.log('-----Up------');
            testView.className = undefined;
        }
    }, this);

    let testView2 = <View> page.getViewById("testView2");
    testView2.on('touch', (args) => {
        let action = (args as TouchGestureEventData).action;
        if (action === 'down') {
            console.log('-----Down------');
            testView2.className = 'onPressStyle2';
        } else if (action === 'up') {
            console.log('-----Up------');
            testView2.className = undefined;
        }
    }, this);
}

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer = app.getRootView();
    if (sideDrawer instanceof RadSideDrawer) {
        sideDrawer.showDrawer();
    }
}