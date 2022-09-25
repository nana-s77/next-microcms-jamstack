// CMSから取得するブログデータ
export type BlogDataContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  tags: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      tagName: string;
    }
  ];
  image: {
    url: string;
    height: number;
    width: number;
  };
};
