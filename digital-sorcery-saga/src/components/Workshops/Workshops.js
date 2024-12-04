import './Workshops.css'
import ImageShifter from './ImageShifter.js';
export default function Workshops(){
    return (
        <div className='workshops'>
            <h1 className='title'>Workshops</h1>
            <ImageShifter images={['/tech.png', '/creativity.png', '/wisdom.png']}/>
        </div>
    );
}