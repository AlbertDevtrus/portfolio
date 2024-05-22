import { useTransform } from "framer-motion";
import { useScroll, motion } from "framer-motion";

function Paragraph({ value, element }) {


    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start start', 'end end']
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
    const condition = children[children.length - 1] === '.';

    return ( 
        <>
            <motion.span 
                style={{
                    opacity, 
                    marginBottom: condition ? '20px' : '0px',
                }} 
                className="word"
            >
                {children}
            </motion.span>
            {condition ? <span style={{width: '100%'}} /> : ''}
        </>
    );
}

export default Paragraph;