import FlexLayout from '@smartface/native/ui/flexlayout';
import FlHeader from 'components/FlHeader';
import { themeService } from 'theme';

export default function setHeader(flHeader: FlHeader) {
    flHeader = new FlHeader();
    themeService.addGlobalComponent(flHeader as any /** to be fixed with stylingcontext next version */, 'titleLayout');
    (flHeader as StyleContextComponentType<FlexLayout>).dispatch({
        type: 'pushClassNames',
        classNames: '.flHeader'
    });
    flHeader.appName = global.lang.appName;
    return flHeader;
}
