import Link from "next/link";

import { CategoryLink } from "../../utils/link-generator";

const Menus = () => {
    const list = [
        {
            "name": "Inspirasi",
            "slug": "inspirasi"
        },
        {
            "name": "Hubungan",
            "slug": "hubungan"
        },
        {
            "name": "Tekno",
            "slug": "tekno"
        },
    ];

    const categories = [];
    const category = {};

    list.map(item => {
        const category = {
            "category": Object.assign({}, item)
        };

        return categories.push(category);
    });

    return (
        <ul>
            <li className="current-item">
                <Link href={{ pathname: `/` }}>Home</Link>
            </li>

            {categories && categories.map(item => {
                return (
                    <li>
                        <CategoryLink elem={item}>
                            {item.category.name}
                        </CategoryLink>
                    </li>
                );
            })}
        </ul>
    );
}

export default Menus;