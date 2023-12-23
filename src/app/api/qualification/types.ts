export namespace ServerQualificationNSTypes {
  export type Tag = 'work' | 'education';

  export type Title = {
    id: number;
    value: 'Work experience' | 'Education';
    tag: Tag;
  };

  export type ContentItem = {
    id: string;
    title: string;
    place: string;
    date: {
      from: string;
      to: string | Date;
    };
    tags: Tag[];
  };

  export type Response = {
    titles: Title[];
    content: ContentItem[];
  };
}
