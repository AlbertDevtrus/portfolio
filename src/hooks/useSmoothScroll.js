import LocomotiveScroll from 'locomotive-scroll';

export default function useSmoothScroll() {
    const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            lerp: 0.05,
            wheelMultiplier: 0.5,
        }
    });

    return { locomotiveScroll };
}