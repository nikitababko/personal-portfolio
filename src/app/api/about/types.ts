export namespace ServerAboutNSTypes {
  export type Paragraph = {
    id: number;
    value: string;
  };

  export type Card = {
    id: number;
    src: string;
    text: string;
    alt: string;
  };

  export type Response = {
    description: Paragraph[];
    cards: Card[];
  };
}
