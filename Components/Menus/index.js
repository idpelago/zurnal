import Link from "next/link";
import { useRouter } from "next/router";
import { CategoryLink } from "../../utils/link-generator";

const Menus = () => {
  const router = useRouter();
  const { slug: activeSlug } = router.query;
  const list = [
    {
      name: "Inspirasi",
      slug: "inspirasi",
    },
    {
      name: "Hubungan",
      slug: "hubungan",
    },
    {
      name: "Tekno",
      slug: "tekno",
    },
  ];

  const categories = [];

  list.map((item) => {
    const category = {
      category: Object.assign({}, item),
    };

    return categories.push(category);
  });

  return (
    <ul>
      <li className={activeSlug == null ? "current-item" : ""}>
        <Link href={{ pathname: `/` }}>Home</Link>
      </li>

      {categories &&
        categories.map((item, index) => {
          return (
            <li
              key={index}
              className={item.category.slug == activeSlug ? "current-item" : ""}
            >
              <CategoryLink elem={item}>{item.category.name}</CategoryLink>
            </li>
          );
        })}
    </ul>
  );
};

export default Menus;
