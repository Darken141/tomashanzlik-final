import React from 'react';
import { motion } from 'framer-motion';

import './production-card.styles.scss';

const ProductionCard = (props) => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    
    return (        
        <a 
            className='production-link' 
            rel="noopener noreferrer" 
            href={props.url} 
            target="_blank"
        >
            <motion.div 
                className="production-card"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{duration:1.5}}
                whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0px 0px 15px #fff'

                }}
                onHoverStart={e => console.log(e)}
            >
                <div 
                    className='production-image'
                    style={{
                        backgroundImage: `url(${props.imgUrl})`
                    }}
                /> 
                <motion.div 
                    className='hover-background' 
                    initial={{opacity:0}}
                    animate={{ opacity: .5, backgroundColor: '#000'}}
                />
                
                <motion.h1 
                        className='card-title'
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0}}
                        transition={{duration: 2}}
                    >
                            {props.name}
                    </motion.h1>
                <motion.div 
                    className="card-content"
                    initial={{ opacity: 0, y: 0}} 
                    whileHover={{ opacity: 1, y: 0}} 
                    transition={{ duration: 1.5}}                  
                >
                    <motion.p 
                        className='card-text'
                    >
                            {props.text}
                    </motion.p>
                </motion.div>
            </motion.div>
        </a>
    )
}
            
export default ProductionCard;
// <a rel="noopener noreferrer" href={props.url} target="_blank">Prejsť na web!</a>