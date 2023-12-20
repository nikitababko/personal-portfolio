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

  export type Images = string[];

  export type Project = {
    id: string;
    title: string;
    images: Images;
    linkToGitHub?: string;
    linkToDemo?: string;
    details: string;
    tags: FilterTag[];
  };

  export type Response = {
    projects: Project[];
    filters: Filter[];
  };
}
