import React from "react";
import s from "./Collaboration.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import Navbar from "../NavigationBar/Navbar";
import {motion} from "framer-motion";
import triangle from "../../public/Triangle.svg";
import Image from "next/image";

const Collaboration = ({}) => {
  return (
      <>
        <section className={s.collaboration}>
          <iframe 
            style={{
              width:"100%",
              height:"100%",
              position:"absolute"
            }} 
            height="315" 
            src={"https://www.youtube.com/embed/8OsV1b8LO6c?controls=0&modestbranding=1&autoplay=1&mute=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
     
          <div className="container">
            <div className={s.collaborationContainer}>
              <motion.a
                  initial={{
                    y: -1000,
                  }}
                  animate={{y: 0}}
                  transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}
                  href="/" className={s.logo}>
                weyaland
              </motion.a>
              <div className={s.content}>
                <motion.div
                    initial={{
                      y: -1000,
                    }}
                    animate={{y: 0}}
                    transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}
                >
                  <h3 className={s.titleContent}>Feel yourself at home since Weya is your new home</h3>
                </motion.div>

                {/*<motion.p*/}
                {/*    initial={{*/}
                {/*      x: -1500,*/}
                {/*    }}*/}
                {/*    animate={{x: 0}}*/}
                {/*    transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}*/}
                {/*    className="text"*/}
                {/*>*/}
                {/*  As a team, we clearly understand that if we want to build*/}
                {/*  something unique like a well-known IRL/Metaverse brand, we have to*/}
                {/*  work with each other and the leaders in the field. We are not*/}
                {/*  alone, and we can go even further by collaborating. One of our*/}
                {/*  most vital principles is sustainable and rapid growth. With your*/}
                {/*  participation and help, our opportunities in this field are just*/}
                {/*  infinite*/}
                {/*</motion.p>*/}
                {/*<motion.div*/}
                {/*    initial={{*/}
                {/*      y: 1000,*/}
                {/*    }}*/}
                {/*    animate={{y: 0}}*/}
                {/*    transition={{ease: "easeOut", duration: 0.5, delay: 1.1}}*/}
                {/*>*/}
                {/*  <Button text="Participate"/>*/}
                {/*</motion.div>*/}

                <Navbar/>
              </div>
            </div>
          </div>
        </section>
      </>

  );
};

export default Collaboration;