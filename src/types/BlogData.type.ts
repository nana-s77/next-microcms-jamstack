// CMSから取得するブログデータ
export type BlogData = {
  contents: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      title: string;
      body: string;
      tags?: [
        {
          id: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          revisedAt: string;
          tagName: string;
        }
      ];
      image?: any;
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
