import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { StackLayout, TouchGestureEventData } from '@nativescript/core';

export function onLoaded(args: any): void {
  const drawerComponent = <RadSideDrawer>args.object;
  let drawerView = drawerComponent.drawerContent;
  let drawerLayout = <StackLayout>drawerView.getViewById('itemsStack');
  drawerLayout.eachChild((itemView) => {
    itemView.on('touch', (args) => {
      let action = (args as TouchGestureEventData).action;
      if (action === 'down') {
        console.log('-----Down------');
        itemView.className = 'onPressStyle';
      } else if (action === 'up') {
        console.log('-----Up------');
        itemView.className = undefined;
      }
    }, this);
    return true;
  });
}