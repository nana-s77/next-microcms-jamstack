export type TagData = {
    contents: [
        {
            id: string,
            createdAt: string,
            updatedAt: string,
            publishedAt: string,
            revisedAt: string,
            tagName: string
        }
    ],
    totalCount: number,
    offset: number,
    limit: number
}