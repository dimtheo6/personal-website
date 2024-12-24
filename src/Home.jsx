import { useEffect, useState } from "react";

export default function Home(){

    const words = ['Developer', 'Engineer', 'Gamer'];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [text , setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(120);


    useEffect(()=>{
        const currentWord = words[currentWordIndex];
        const timeout = setTimeout(()=>{
            if (isDeleting){
                setText((prev)=> prev.slice(0,-1))
            }else{
                setText((prev)=> currentWord.slice(0,prev.length + 1))
            }
        
        if (!isDeleting && text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            setSpeed(80);
          } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            setSpeed(120);
          }
        }, speed);
    
        return () => clearTimeout(timeout); // Cleanup the timeout
      }, [text, isDeleting, speed, words, currentWordIndex]);


    return (
        <section className="flex flex-col justify-center items-center h-[calc(100vh-5rem)] w-screen gap-10 text-center">
            <h1 className="font-bold text-7xl text-black dark:text-white ">Dimitris Theodosopoulos</h1>
            <div className="flex items-center justify-center  py-2 px-3 font-bold text-3xl rounded-lg bg-orange-600 text-white">{`> ${text}`}</div>
        </section>
    )
}