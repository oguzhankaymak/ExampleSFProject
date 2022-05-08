import { BottomTabBarRouter, NativeStackRouter, Route, NativeRouter } from '@smartface/router';
import Color from '@smartface/native/ui/color';
import * as Pages from 'pages';

const bottomTabBarRouter = BottomTabBarRouter.of({
  path: '/btb',
  to: '/btb/tab1/generalPage',
  homeRoute: 0,
  tabbarParams: () => ({
    ios: { translucent: false },
    itemColor: {
      normal: Color.GRAY,
      selected: Color.WHITE
    },
    backgroundColor: Color.BLACK,
  }),
  headerBarParams : () =>({
    titleColor:Color.WHITE,
    backgroundColor: Color.BLACK,
    height:5
  }),
  items: [
    {
      title: 'General',
    },
    {
      title: 'Business',
    },
    {
      title: 'Sports',
    },
    {
      title: 'Technology',
    },
    {
      title: 'Health',
    },
  ],
  // tab1
  routes: [
      // tab1
      NativeStackRouter.of({
          path: '/btb/tab1',
          to: '/btb/tab1/generalPage',
          headerBarParams: () => ({
              visible: true
          }),
          routes: [
              Route.of<Pages.Page1>({
                  path: `/btb/tab1/generalPage`,
                  build(router, route) {
                      return new Pages.GeneralPage(router, route);
                  },
                  headerBarParams: () => ({
                      visible: true,
                  }),
              })
          ]
      }),
      NativeStackRouter.of({
          path: '/btb/tab2',
          to: '/btb/tab2/businessPage',
          routes: [
              Route.of<Pages.Page1>({
                  path: `/btb/tab2/businessPage`,
                  build(router, route) {
                      return new Pages.BusinessPage(router, route);
                  },
                  headerBarParams: () => ({
                      visible: true,
                  }),
              }),
          ]
      }),
      NativeStackRouter.of({
          path: '/btb/tab3',
          to: '/btb/tab3/page3',
          routes: [
              Route.of<Pages.Page3>({
                  path: `/btb/tab3/page3`,
                  build(router, route) {
                      return new Pages.Page3(router, route);
                  },
                  headerBarParams: () => ({
                      visible: true,
                  }),
              })
          ]
      })
  ]
});

export default bottomTabBarRouter;

