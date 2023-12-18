import type { ServerAboutNSTypes } from '../../../api/about/types';

export namespace DescriptionNSTypes {
  export type Props = {
    description: ServerAboutNSTypes.Paragraph[];
  };
}
