import PgNewsDetailDesign from 'generated/pages/newsDetailPage';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import WebView from "@smartface/native/ui/webview";
import FlexLayout from "@smartface/native/ui/flexlayout";

export default class NewsDetailPage extends withDismissAndBackButton(PgNewsDetailDesign) {
    routeData: Record<string, any> = this.route.getState().routeData; 
    myWebView: WebView;
    constructor(private router?: Router, private route?: Route) {
    super({});
  }

  initWebView() {
    const myWebView = new WebView({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      positionType: FlexLayout.PositionType.ABSOLUTE,
    });
    this.myWebView = myWebView;
    this.addChild(myWebView);
  }

  onShow() {
    super.onShow();
    this.initBackButton(this.router);
    this.initDismissButton(this.router);
    this.myWebView.loadURL(this.routeData.url);
  }

  onLoad() {
    super.onLoad();
    this.initWebView();
  }
}
