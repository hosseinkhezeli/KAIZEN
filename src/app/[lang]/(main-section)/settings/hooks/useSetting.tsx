'use client';
//@3rd Party
import {
    ForwardRefExoticComponent,
    RefAttributes,
    SVGProps,
    useState,
} from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Assets
import {
    FingerPrintIcon,
    LanguageIcon,
    PaintBrushIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Component
import ThemeSetting from '@/app/[lang]/(main-section)/settings/components/ThemeSetting';
import LanguageSetting from '@/app/[lang]/(main-section)/settings/components/LanguageSetting';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Types
export type TSettingMenuList = {
    icon: ForwardRefExoticComponent<
        Omit<SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string;
            titleId?: string;
        } & RefAttributes<SVGSVGElement>
    >;
    label: string;
    component?: () => JSX.Element;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const useSetting = () => {
    const [selectedItem, setSelectedItem] = useState<TSettingMenuList | null>(
        null,
    );
    const settingMenuList: TSettingMenuList[] = [
        {
            label: 'Edit Profile',
            icon: UserIcon,
        },
        {
            label: 'Security',
            icon: FingerPrintIcon,
        },
        {
            label: 'Theme',
            icon: PaintBrushIcon,
            component: () => <ThemeSetting />,
        },
        {
            label: 'Language',
            icon: LanguageIcon,
            component: () => <LanguageSetting />,
        },
    ];

    const onClickHandle = (item: TSettingMenuList) => {
        if (item.label === selectedItem?.label) {
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
        }
    };
    return { settingMenuList, onClickHandle, selectedItem };
};

export default useSetting;
