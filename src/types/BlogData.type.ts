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
      tags: [];
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
