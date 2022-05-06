
import { NativeRouter } from '@smartface/router';
import Application from '@smartface/native/application';
import TabbarRoute from './tabbar';

Application.on(Application.Events.BackButtonPressed, () => {
  NativeRouter.getActiveRouter()?.goBack();
});

const router = NativeRouter.of({
  path: '/',
  isRoot: true,
  routes: [TabbarRoute]
});

export default router;

