import type { ServerQualificationNSTypes } from '../../../../api/qualification/types';

export namespace QualificationMobileViewNSTypes {
  export type Props = {
    titles: ServerQualificationNSTypes.Title[];
    content: ServerQualificationNSTypes.ContentItem[];
  };
}
