export namespace ServerSkillsNSTypes {
  export type Tag = 'frontend' | 'backend';

  export type IconName =
    | 'react'
    | 'next'
    | 'angular'
    | 'vue'
    | 'redux'
    | 'mobX'
    | 'websocket'
    | 'gulp'
    | 'webpack'
    | 'typeScript'
    | 'javaScript'
    | 'sql'
    | 'mongo'
    | 'node';

  export type Title = {
    id: number;
    value: 'Frontend' | 'Backend';
    tag: Tag;
  };

  export type ContentItem = {
    id: string;
    title: string;
    iconName: IconName;
    tags: Tag[];
  };

  export type Response = {
    titles: Title[];
    content: ContentItem[];
  };
}
