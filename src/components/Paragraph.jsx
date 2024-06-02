import { useTransform } from "framer-motion";
import { useScroll, motion } from "framer-motion";

function Paragraph({ value, element }) {


    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start start', '0.7 end']
    })

    const words = value.split(' ');

    const strongWords = [8, 13, 35, 49, 50]

    return ( 
        <p>
            {
                words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 1 / words.length;

                    if(strongWords.includes(i)) {
                        return <StrongWord key={i} range={[start, end]} progress={scrollYProgress}>{word}</StrongWord>
                    }

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

function StrongWord({children, range, progress}) {

    const condition = children[children.length - 1] === '.';
    const scale = useTransform(progress, range, [1, 1.06]);

    return (
        <>
            <motion.span 
                className="word strongWord"
                style={{
                    marginBottom: condition ? '20px' : '0px',
                    scale
                }} 
            >
                {children}
            </motion.span>
            { condition ? <span style={{width: '100%'}} /> : '' }
        </>
    )
}

export default Paragraph;