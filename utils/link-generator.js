import Link from "next/link";

export const PostLink = ({ elem, children }) => {
    return (
        <Link
            href={{
                pathname: `/post/${elem.post_slug_id}/${elem.post_slug_title}`,
            }}
            as={`/post/${elem.post_slug_id}/${elem.post_slug_title}`}
            shallow
            passHref
        >
            {children}
        </Link>
    );
};

export const UserLink = ({ elem, children }) => {
    return (
        <Link
            href={{
                pathname: `/user/${elem.username}`,
            }}
            as={`/user/${elem.username}`}
            shallow
            passHref
        >
            {children}
        </Link>
    );
};

export const CategoryLink = ({ elem, children }) => {
    return (
        <Link
            className="utf_post_cat"
            href={{
                pathname: `/category/${elem.category.slug}`,
            }}
            as={`/category/${elem.category.slug}`}
            shallow
            passHref
        >
            {children}
        </Link>
    );
}

export const TagLink = ({ elem, children }) => {
    return (
        <Link
            href={{
                pathname: `/tag/${elem.slug}`,
            }}
            as={`/tag/${elem.slug}`}
            shallow
            passHref
        >
            {children}
        </Link>
    );
};