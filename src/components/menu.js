import React from 'react';


class Menu extends React.Component {
  render() {
    return (
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-center">
            <a className="p-2 text-muted" href="#">Курсы</a>
            <a className="p-2 text-muted" href="#">Расписание</a>
            <a className="p-2 text-muted" href="#">Преподаватели</a>
            <a className="p-2 text-muted" href="#">Контакты</a>
          </nav>
        </div>
    );
  }
}

export default Menu;