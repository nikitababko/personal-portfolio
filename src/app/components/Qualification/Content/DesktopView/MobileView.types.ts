import type { ServerQualificationNSTypes } from '../../../../api/qualification/types';

export namespace QualificationDesktopViewNSTypes {
  export type Props = {
    titles: ServerQualificationNSTypes.Title[];
    content: ServerQualificationNSTypes.ContentItem[];
  };
}
