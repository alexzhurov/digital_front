import './index.css';


function MenuItem({ icon, title }: { icon: string, title: string }) {
    return (
        <div className="menuItem">
            <img src={icon} className="menuItem-icon"/>
            <div className="menuItem-title">{title}</div>
        </div>
    );
}

export { MenuItem };
