export interface Articles {
  data: Article[];
  meta: Meta;
}

export interface Post {
    data: Article;
    meta: Meta; 
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    lead: string;
    article: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: any;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any;
          createdAt: string;
          updatedAt: string;
        };
      }[];
    };
    localizations: {
      data: any[];
    };
  };
}
