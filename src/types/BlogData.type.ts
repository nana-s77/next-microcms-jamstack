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
      image?: {
        url: string;
        height: number;
        width: number;
      };
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
