import LocomotiveScroll from 'locomotive-scroll';

export default function useSmoothScroll() {
    const locomotiveScroll = new LocomotiveScroll();

    return { locomotiveScroll };
}