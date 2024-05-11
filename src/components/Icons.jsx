export function LinkedinIcon({speed}) {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-scroll data-scroll-speed={speed}>
            <path d="M13.0333 11.8416C13.3785 11.8416 13.6583 11.5617 13.6583 11.2166C13.6583 10.8714 13.3785 10.5916 13.0333 10.5916C12.6882 10.5916 12.4083 10.8714 12.4083 11.2166C12.4083 11.5617 12.6882 11.8416 13.0333 11.8416Z" fill="black"/>
            <path d="M13.0333 14.1084V26.5917M27.5917 26.5917V18.5834C27.5895 17.2978 27.0778 16.0654 26.1687 15.1564C25.2596 14.2473 24.0273 13.7356 22.7417 13.7334C21.4546 13.7334 20.2201 14.2441 19.3093 15.1534C18.3984 16.0627 17.8855 17.2963 17.8833 18.5834M17.8833 18.5834V26.5917M17.8833 18.5834V14.1084" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M33.75 4.58325H6.25C5.80798 4.58325 5.38405 4.75885 5.07149 5.07141C4.75893 5.38397 4.58334 5.80789 4.58334 6.24992V33.7499C4.58334 34.1919 4.75893 34.6159 5.07149 34.9284C5.38405 35.241 5.80798 35.4166 6.25 35.4166H33.75C34.192 35.4166 34.616 35.241 34.9285 34.9284C35.2411 34.6159 35.4167 34.1919 35.4167 33.7499V6.24992C35.4167 5.80789 35.2411 5.38397 34.9285 5.07141C34.616 4.75885 34.192 4.58325 33.75 4.58325Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export function GithubIcon({speed}) {
    return (
        <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-scroll data-scroll-speed={speed}>
            <path d="M20 27.5337V23.9462C20.0469 23.3502 19.9664 22.751 19.7638 22.1885C19.5612 21.626 19.2412 21.113 18.825 20.6837C22.75 20.2462 26.875 18.7587 26.875 11.9337C26.8747 10.1885 26.2034 8.51023 25 7.24624C25.5698 5.71937 25.5295 4.03167 24.8875 2.53374C24.8875 2.53374 23.4125 2.09624 20 4.38374C17.1349 3.60846 14.1152 3.60846 11.25 4.38374C7.8375 2.09624 6.3625 2.53374 6.3625 2.53374C5.72047 4.03167 5.68018 5.71937 6.25 7.24624C5.03766 8.51961 4.36566 10.2131 4.375 11.9712C4.375 18.7462 8.5 20.2337 12.425 20.7212C12.0138 21.1462 11.6966 21.653 11.4941 22.2086C11.2917 22.7643 11.2085 23.3563 11.25 23.9462V27.5337" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.25 25.0337C7.5 26.2499 4.375 25.0337 2.5 21.2837" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function TwitterIcon({speed}) {
    return (
        <svg width="30" height="30" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg" data-scroll data-scroll-speed={speed}>
            <path d="M20.2335 14.7154L32.8901 0.318848H29.8903L18.9036 12.8187L10.1243 0.318848H0L13.274 19.2228L0 34.3188H2.99978L14.6039 21.1171L23.8757 34.3188H34L20.2335 14.7154ZM16.1263 19.388L14.7814 17.5058L4.0797 2.52885H8.68686L17.3212 14.6158L18.6661 16.498L29.8928 32.2108H25.2856L16.1263 19.388Z" fill="black"/>
        </svg>
    )
}

export function ArrowIcon({ color='black', size='30' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.866025" y1="0.902344" x2="19.866" y2="33.8113" stroke={color} strokeWidth="2"/>
            <line x1="38.8618" y1="1.5" x2="19.8618" y2="34.409" stroke={color} strokeWidth="2"/>
        </svg>
    )
}

export function ArrowIcon2({color='white', size = 20}) {
    return ( 
        <svg width={size - 2} height={size} viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9142 0.585785C16.1332 -0.195264 14.8668 -0.195264 14.0858 0.585785L1.35786 13.3137C0.576816 14.0948 0.576816 15.3611 1.35786 16.1421C2.13891 16.9232 3.40524 16.9232 4.18629 16.1421L15.5 4.82843L26.8137 16.1421C27.5948 16.9232 28.8611 16.9232 29.6421 16.1421C30.4232 15.3611 30.4232 14.0948 29.6421 13.3137L16.9142 0.585785ZM17.5 32.0167L17.5 2H13.5L13.5 32.0167H17.5Z" fill={color}/>
        </svg>
    );
}

export function LogoIcon() {
    return (
        <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="23.1214" y2="-1" transform="matrix(-0.00687885 0.999976 -0.99998 -0.00633344 0.159058 16.416)" stroke="black" strokeWidth="2"/>
            <line x1="0.240967" y1="39" x2="24.3374" y2="39" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="23.1214" y2="-1" transform="matrix(0.00398325 -0.999992 0.999993 0.00366726 39.9079 23.1216)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="24.0964" y2="-1" transform="matrix(-0.999996 0.00266613 -0.00289573 -0.999996 40 0)" stroke="black" strokeWidth="2"/>
            <path d="M7.71088 7.39893H32.2892V32.6012H7.71088V7.39893Z" fill="black"/>
        </svg>

    )
}