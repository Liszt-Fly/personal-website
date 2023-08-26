interface Link {
    icon: string;
    name?: string;
    hoverColor: string;
    whiteFont: boolean
}
export function Social() {
    const SocialLinks: Link[] = [
        {
            icon: "fa-brands fa-github",
            name: "Github",
            hoverColor: "bg-github",
            whiteFont: false
        },
        {
            icon: "fa-regular fa-square",
            name: "blog",
            whiteFont: false,
            hoverColor: "bg-github",
        },
        {
            icon: "fa-brands fa-bilibili",
            whiteFont: true,
            hoverColor: "bg-pink-300",
        },
    ];
    const SocialLinkItems = SocialLinks.map((item) => {
        const style = [
            "cursor-pointer",
            "icon",
            "flex",
            "mt-2",
            "items-center",
            "py-1",
            "px-3",
            item.whiteFont ? "hover:text-white" : "",
            "justify-center",
            "rounded-md",
            `hover:${item.hoverColor}`,
            "text-white",
            "transition",
            "duration-150",
            "bg-[#3f3f46]",
            "hover:text-black",
            "mr-2"
        ];
        if (item.name) {
            return (<a className={style.join(" ")} key={item.icon}>
                <i className={item.icon + " " + "mr-2"}></i>
                <span>{item.name}</span>
            </a>)
        }
        else {
            return (<a className={style.join(" ")} key={item.icon}>
                <i className={item.icon}></i>
            </a>)
        }

    })
    return (<div className="social flex mt-4 font-light">
        {SocialLinkItems}
    </div>)
}