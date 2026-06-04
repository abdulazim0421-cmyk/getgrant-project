import Link from "next/link";

import {
    Phone,
    Mail,
    MapPin,

} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: "Образование",
            links: [
                { label: "Университеты", href: "/University" },
                { label: "Страны", href: "/Countries" },
                { label: "Программы", href: "/Programs" },
                { label: "Онлайн-подготовка", href: "/Preparation" },
            ],
        },
        {
            title: "Компания",
            links: [
                { label: "О нас", href: "/About" },
                { label: "Наша команда", href: "/Team" },
                { label: "Партнёры", href: "/Partners" },
            ],
        },
        {
            title: "Поддержка",
            links: [
                { label: "FAQ", href: "/faq" },
                { label: "Контакты", href: "/Contacts" },
                { label: "Блог", href: "/Blog" },
                { label: "Документы", href: "/Docs" },
            ],
        },
    ];

    const socialLinks = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/getgrant.kg/",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            )
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/getgrant.kg?igsh=ZnBrbnl0aGg1M2lk",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            )
        },
        {
            name: "Linkedin",
            href: "https://linkedin.com/company/getgrant",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            )
        },
        {
            name: "Youtube",
            href: "https://youtube.com/@getgrant",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z"/><path d="m10 15 5-3-5-3z"/></svg>
            )
        },
    ];

    return (
        <footer className="bg-[#0B1221] text-gray-400 py-10 lg:pt-14 pb-14">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-10">

                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className=" py-2 px-4 rounded-lg">
                                <svg width="94" height="44" viewBox="0 0 77 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 18C0 27.9411 8 35.5 18 35.5C21 35.5 24.5 35 29.9062 31.5C30 27.5 29.9062 18 29.9062 18H26V28.8762C26 30 22.2644 31.5016 17.4078 31.5016C9.3988 31.5016 3.15988 26.009 3.15988 18C3.15988 9.99098 9.3988 3.49839 17.4078 3.49839C21.0856 3.49839 24.4436 4.86747 27 7.12379L29.9062 4.5C26.7331 1.69936 22.565 0 18 0C8.05887 0 0 8.05887 0 18Z" fill="white"/>
                                    <path d="M39.9142 17.9872C38.6926 17.9872 37.6357 17.7031 36.7437 17.1349C35.8517 16.561 35.1613 15.7684 34.6727 14.7571C34.1897 13.74 33.9482 12.5696 33.9482 11.2457C33.9482 9.92752 34.1897 8.75707 34.6727 7.73434C35.1613 6.70593 35.8346 5.90196 36.6926 5.32241C37.5562 4.73718 38.5534 4.44457 39.684 4.44457C40.3943 4.44457 41.0789 4.57525 41.738 4.83661C42.3971 5.0923 42.988 5.48718 43.5107 6.02127C44.0392 6.54968 44.4568 7.2173 44.7636 8.02411C45.0704 8.82525 45.2238 9.77411 45.2238 10.8707V11.6207H34.9965V10.2826H43.6727C43.6727 9.44173 43.5022 8.68605 43.1613 8.01559C42.8261 7.33946 42.3573 6.80536 41.7551 6.41332C41.1585 6.02127 40.4681 5.82525 39.684 5.82525C38.8545 5.82525 38.1244 6.04684 37.4937 6.49002C36.863 6.93321 36.3687 7.51843 36.0107 8.24571C35.6585 8.97298 35.4795 9.76843 35.4738 10.6321V11.4332C35.4738 12.473 35.6528 13.3821 36.0107 14.1605C36.3744 14.9332 36.8886 15.5326 37.5534 15.9588C38.2181 16.3849 39.0051 16.598 39.9142 16.598C40.5335 16.598 41.0761 16.5014 41.542 16.3082C42.0136 16.115 42.4085 15.8565 42.7267 15.5326C43.0505 15.2031 43.2948 14.8423 43.4596 14.4503L44.8999 14.919C44.7011 15.4701 44.3744 15.9787 43.9198 16.4446C43.471 16.9105 42.9085 17.2855 42.2323 17.5696C41.5619 17.848 40.7892 17.9872 39.9142 17.9872Z" fill="white"/>
                                    <path d="M53.7231 4.62355V5.94457H47.4759V4.62355H53.7231ZM49.4276 1.48718H50.9532V14.2968C50.9532 14.8423 51.047 15.2713 51.2345 15.5838C51.422 15.8906 51.6663 16.1093 51.9674 16.24C52.2686 16.365 52.5896 16.4275 52.9305 16.4275C53.1294 16.4275 53.2998 16.4162 53.4419 16.3934C53.5839 16.365 53.7089 16.3366 53.8169 16.3082L54.1407 17.6804C53.993 17.7372 53.8112 17.7883 53.5953 17.8338C53.3793 17.8849 53.1123 17.9105 52.7941 17.9105C52.2373 17.9105 51.7004 17.7883 51.1833 17.544C50.672 17.2997 50.2515 16.936 49.922 16.4531C49.5924 15.9701 49.4276 15.3707 49.4276 14.6548V1.48718Z" fill="white"/>
                                    <path d="M33.9482 33.7145V20.6235H35.4227V22.6349H35.5335C35.7948 21.9758 36.2494 21.4446 36.8971 21.0412C37.5505 20.6321 38.2892 20.4275 39.113 20.4275C39.238 20.4275 39.3772 20.4304 39.5306 20.436C39.684 20.4417 39.8119 20.4474 39.9142 20.4531V21.9957C39.846 21.9843 39.7267 21.9673 39.5562 21.9446C39.3857 21.9218 39.2011 21.9105 39.0022 21.9105C38.3204 21.9105 37.7124 22.0554 37.1784 22.3451C36.6499 22.6292 36.2323 23.0241 35.9255 23.5298C35.6187 24.0355 35.4653 24.6122 35.4653 25.2599V33.7145H33.9482Z" fill="white"/>
                                    <path d="M46.6392 34.0128C45.8494 34.0128 45.1278 33.8593 44.4744 33.5525C43.821 33.24 43.3011 32.7912 42.9147 32.2059C42.5284 31.615 42.3352 30.8991 42.3352 30.0582C42.3352 29.4105 42.4574 28.865 42.7017 28.4218C42.946 27.9787 43.2926 27.615 43.7415 27.3309C44.1903 27.0468 44.7216 26.8224 45.3352 26.6576C45.9488 26.4929 46.625 26.365 47.3636 26.2741C48.0966 26.1832 48.7159 26.1037 49.2216 26.0355C49.7329 25.9673 50.1221 25.8593 50.3892 25.7116C50.6562 25.5639 50.7897 25.3253 50.7897 24.9957V24.6889C50.7897 23.7968 50.5227 23.0951 49.9886 22.5838C49.4602 22.0667 48.6988 21.8082 47.7045 21.8082C46.7613 21.8082 45.9915 22.0156 45.3949 22.4304C44.804 22.8451 44.3892 23.3338 44.1505 23.8963L42.7102 23.3764C43.0057 22.6605 43.4147 22.0895 43.9375 21.6633C44.4602 21.2315 45.0454 20.9218 45.6932 20.7343C46.3409 20.5412 46.9971 20.4446 47.6619 20.4446C48.1619 20.4446 48.6818 20.5099 49.2216 20.6406C49.767 20.7713 50.2727 20.9985 50.7386 21.3224C51.2045 21.6406 51.5824 22.0866 51.8721 22.6605C52.1619 23.2287 52.3068 23.9503 52.3068 24.8253V33.7145H50.7897V31.6434H50.696C50.5142 32.0298 50.2443 32.4048 49.8863 32.7684C49.5284 33.1321 49.0795 33.4304 48.5397 33.6633C48 33.8963 47.3665 34.0128 46.6392 34.0128ZM46.8437 32.6235C47.6505 32.6235 48.3494 32.4446 48.9403 32.0866C49.5312 31.7287 49.9858 31.2542 50.304 30.6633C50.6278 30.0667 50.7897 29.4105 50.7897 28.6946V26.8025C50.6761 26.9105 50.4858 27.0071 50.2187 27.0923C49.9574 27.1775 49.6534 27.2542 49.3068 27.3224C48.9659 27.3849 48.625 27.4389 48.2841 27.4843C47.9432 27.5298 47.6363 27.5696 47.3636 27.6037C46.625 27.6946 45.9943 27.8366 45.4716 28.0298C44.9488 28.223 44.5483 28.49 44.2699 28.8309C43.9915 29.1662 43.8522 29.598 43.8522 30.1264C43.8522 30.9218 44.1363 31.5383 44.7045 31.9758C45.2727 32.4076 45.9858 32.6235 46.8437 32.6235Z" fill="white"/>
                                    <path d="M58.3393 25.5326V33.7145H56.8223V20.6235H58.2967V22.6775H58.4331C58.7399 22.0071 59.2172 21.4701 59.8649 21.0667C60.5183 20.6576 61.3251 20.4531 62.2854 20.4531C63.1661 20.4531 63.9388 20.6378 64.6036 21.0071C65.274 21.3707 65.7939 21.9076 66.1632 22.6179C66.5382 23.3281 66.7257 24.2003 66.7257 25.2343V33.7145H65.2087V25.3281C65.2087 24.2542 64.9075 23.4048 64.3053 22.7798C63.7087 22.1548 62.9075 21.8423 61.9018 21.8423C61.2143 21.8423 60.6036 21.99 60.0695 22.2855C59.5354 22.5809 59.1121 23.0071 58.7996 23.5639C58.4928 24.115 58.3393 24.7713 58.3393 25.5326Z" fill="white"/>
                                    <path d="M76.357 20.6235V21.9446H70.1098V20.6235H76.357ZM72.0615 17.4872H73.5871V30.2968C73.5871 30.8423 73.6809 31.2713 73.8684 31.5838C74.0559 31.8906 74.3002 32.1093 74.6013 32.24C74.9024 32.365 75.2235 32.4275 75.5644 32.4275C75.7632 32.4275 75.9337 32.4162 76.0757 32.3934C76.2178 32.365 76.3428 32.3366 76.4507 32.3082L76.7746 33.6804C76.6269 33.7372 76.4451 33.7883 76.2291 33.8338C76.0132 33.8849 75.7462 33.9105 75.428 33.9105C74.8712 33.9105 74.3343 33.7883 73.8172 33.544C73.3059 33.2997 72.8854 32.936 72.5559 32.4531C72.2263 31.9701 72.0615 31.3707 72.0615 30.6548V17.4872Z" fill="white"/>
                                </svg>
                            </div>
                        </Link>

                        <p className="max-w-xs text-[15px] leading-relaxed">
                            Онлайн-сервис для подготовки и сопровождения поступления студентов 9–11 классов за рубеж.
                        </p>

                        <div className="space-y-4 pt-4">
                            <a href="tel:+996554123456" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Phone size={18} className="text-gray-500" />
                                <span className="text-sm font-medium">+996 554 123 456</span>
                            </a>
                            <a href="mailto:info@getgrant.kg" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail size={18} className="text-gray-500" />
                                <span className="text-sm font-medium">info@getgrant.kg</span>
                            </a>
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-gray-500" />
                                <span className="text-sm font-medium leading-tight">
                                    Бишкек, ул. Касыма Тыныстанова, 197/1
                                </span>
                            </div>
                        </div>
                    </div>

                    {sections.map((section) => (
                        <div key={section.title} className="space-y-6">
                            <h4 className="text-white font-black uppercase text-sm tracking-widest">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="hover:text-blue-500 transition-colors text-[15px]">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800/50 py-7 flex flex-wrap gap-4">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-blue-600 text-white transition-all duration-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <div className="border-t border-gray-800/50 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <p className="text-sm">
                        © {currentYear} GetGrant. Все права защищены.
                    </p>

                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                        <Link href="/front-end/app/(pages)/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Условия использования</Link>
                        <Link href="/license" className="hover:text-white transition-colors">Лицензии</Link>
                    </div>
                </div>

                <div className="mt-8 text-[11px] text-gray-600 leading-relaxed max-w-4xl italic">
                    Лицензия на образовательную деятельность № 240000733 от 01.01.2020 | Свидетельство об аккредитации № 654321 от 15.03.2021
                </div>
            </div>
        </footer>
    );
}