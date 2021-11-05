import './index.css';
import logo         from './../../icons/logo.svg';
import arrowLeft    from './../../icons/arrow-left.svg';
import { MenuItem } from './../MenuItem/index';
import hexagon      from './../../icons/hexagon.svg';
import heart        from './../../icons/heart.svg';
import grid         from './../../icons/grid.svg';
import users        from './../../icons/users.svg';
import trendingUp   from './../../icons/trending-up.svg';


function Menu({ className }: { className: string }) {
    const lists = [
        { title: 'TOP-10 Twitter Dapplets', link: { name: 'Me', url: '' } },
        { title: 'Best Financial dapplets by Jack', link: { name: 'Jack', url: '' } },
        { title: 'TOP-10 Twitter Dapplets', link: { name: 'Me', url: '' } }
    ];


    return (
        <div className={`menu ${className}`}>
            <div className="menu-header">
                <img src={logo} className="menu-logo" alt="logo"/>
                <div className="menu-title">Dapplets Project <span className="dot">.</span></div>
                <div className="menu-toggler">
                    <img src={arrowLeft} alt="navigation"/>
                </div>
            </div>
            {
            <div className="menuNav">
                <MenuItem icon={hexagon} title='All Dapplets'/>
                <MenuItem icon={heart} title='Editor’s Choice'/>
                <MenuItem icon={grid} title='Essential Dapplets'/>
                <MenuItem icon={users} title='Social Networks'/>
                <MenuItem icon={trendingUp} title='Financial Dapplets'/>
            </div>
}

            {lists.length && (
                <div className="lists">
                    <div className="lists-title">My lists</div>
                    {lists.map(({ title, link }) => (
                        <div className="lists-item">
                            {title}
                            {link.name && (
                                <span> ({<a className="lists-link" href={link.url}>{link.name}</a>})</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export { Menu };
