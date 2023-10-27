'use client'
import Typewriter from 'typewriter-effect'

const TypedHeading: React.FC = () => {
    return(
        <Typewriter
        onInit={(typewriter) => {
            
            typewriter.typeString('Neurotech')
            .callFunction(() => {
                console.log('String typed out!');
            })

            .pauseFor(3)
            typewriter.typeString('<span style="color: #FFC436;">@</span>')
            .pauseFor(2)
            typewriter.typeString('<span style="color: #213555;">Davoos</span>')
            typewriter.deleteChars(6)
            typewriter.typeString('<span style="color: #213555;">Davis.</span>')

            .callFunction(() => {
                console.log('All strings were deleted');
            })
            
            .start();
        }}
        />
    )
}

export default TypedHeading;
