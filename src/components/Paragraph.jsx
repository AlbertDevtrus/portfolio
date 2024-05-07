import { useTransform } from "framer-motion";
import { useScroll, motion } from "framer-motion";

function Paragraph({ value, element }) {


    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.8', 'start -2']
    })

    const words = value.split(' ');

    return ( 
        <p>
            {
                words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 1 / words.length;

                    return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })
            }
        </p>
     );
}

function Word({children, range, progress}) {

    const opacity = useTransform(progress, range, [0.2, 1]);

    return ( 
        <motion.span style={{opacity}} className="word">{children}</motion.span>
    );
}

export default Paragraph;