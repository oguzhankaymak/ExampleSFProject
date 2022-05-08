import { NativeStackRouter as StackRouter, Route, Router } from '@smartface/router';
import * as Pages from 'pages';

export default function (basePath: string) {
    return StackRouter.of({
        path: `${basePath}/newsDetail`,
        to: `${basePath}/newsDetail/main`,
        modal: true,
        routes: [
            Route.of<Pages.NewsDetailPage>({
                path: `${basePath}/newsDetail/main`,
                build(router, route) {
                    const page = new Pages.NewsDetailPage(router, route);
                    Router.getActiveRouter().setState({ view: page });
                    return page;
                },
                headerBarParams: () => ({
                    visible: true
                })
            }),
            
        ]
    });
}
