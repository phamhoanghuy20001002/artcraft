'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { TbMountain } from 'react-icons/tb';

import { GiAbstract006, GiAbstract061 } from 'react-icons/gi'
import { FaPaintBrush } from 'react-icons/fa';
import { AiOutlineBorderlessTable } from 'react-icons/ai';
import { BsImageAlt } from 'react-icons/bs';

import CategoryBox from "../CategoryBox";


export const categories = [
    {
        label: 'Sơn dầu',
        icon: FaPaintBrush,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Trừu tượng',
        icon: GiAbstract006,
        description: 'This property is has windmills!',
    },
    {
        label: 'Sơn mài',
        icon: BsImageAlt,
        description: 'This property is modern!'
    },
    {
        label: 'Phong cảnh',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Nghệ thuật',
        icon: GiAbstract061,
        description: 'This property is on an island!'
    },
    {
        label: 'Khung tranh',
        icon: AiOutlineBorderlessTable,
        description: 'This is property has a beautiful pool!'
    },


]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (

        <div
            className="
          pt-3
          flex 
          flex-row 
          items-center 
          justify-center
          md:gap-5
          bg-rose-500
         
        "
        >
            {categories.map((item) => (
                <CategoryBox
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    selected={category === item.label}
                />
            ))}
        </div>
    );
}

export default Categories;