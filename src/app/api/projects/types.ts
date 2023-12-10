export namespace ServerProjectsNSTypes {
  export type FilterTag =
    | 'all'
    | 'webApp'
    | 'mobileApp'
    | 'landing'
    | 'lib'
    | 'design';

  export type Filter = {
    id: number;
    value:
      | 'All'
      | 'Web app'
      | 'Landings'
      | 'Libs'
      | 'Design';
    tag: FilterTag;
  };

  export type Project = {
    id: string;
    title: string;
    src: string;
    link: string;
    details: string;
    alt: string;
    tags: FilterTag[];
  };

  export type ProjectsResponse = {
    projects: Project[];
    filters: Filter[];
  };
}
