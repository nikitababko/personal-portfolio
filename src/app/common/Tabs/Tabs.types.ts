import type React from 'react';

export namespace TabsNSTypes {
  export type Props<LabelItem, ContentItem> = {
    data: {
      labels: LabelItem[];
      content: ContentItem[];
    };
    showMore?: boolean;
    renderContent: (
      data: ContentItem & { index: number },
    ) => React.ReactNode;
    labelWidthClassName?: string;
    contentContainerStylesClassName?: string;
    contentContentStylesClassName?: string;
  };

  export type ExtendLabel = {
    id: number | string;
    value: string;
    tag: string;
  };

  export type ExtendContentItem = {
    id: number | string;
    tag?: string;
    tags?: string[];
  };

  export type UseControllerReturn<Label> = {
    selectedLabel: Label;
    setSelectedLabel: React.Dispatch<
      React.SetStateAction<Label>
    >;
  };
}
