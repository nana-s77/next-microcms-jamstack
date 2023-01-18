import { BlogData } from "../../types/BlogData.type";
import { TagData } from "../../types/TagData.type";
import { client } from "../../../libs/client";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
    const data: BlogData = await client.get({ endpoint: "blog" });
    const tagData: TagData = await client.get({endpoint: 'tags',})

    return {
        props: {
            blog: data.contents,
            tags: tagData.contents
        },
    }
}

const List = ({
    blog,
    tags
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>list</div>
    )
}

export default List