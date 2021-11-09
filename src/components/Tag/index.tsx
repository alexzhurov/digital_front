import './index.css';
import { ReactComponent as Cross } from './../../icons/cross.svg';


enum colors {
    purple = 'purple',
    green = 'green'
}

function Tag({ text, color }: { text: string, color: colors }) {
    return (
        <div className={`tag tag-${color}`}>
            <div className="tag-text">{text}</div>
            <div className='cross'><Cross/></div>
        </div>
    );
}

export { Tag, colors };

