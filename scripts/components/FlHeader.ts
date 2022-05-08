import FlHeaderDesign from 'generated/my-components/FlHeader';

export default class FlHeader extends FlHeaderDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
        this.pageName = pageName;
    }

    get appName(): string {
        return this.lblHeader.text;
    }
    set appName(value: string) {
        this.lblHeader.text = value;
    }
}
