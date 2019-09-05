import React from 'react';


class Banner extends React.Component {
  render() {
    return (
        <div onClick="func()" className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Добро пожаловать на сайт с онлайн-курсами для программистов!</h1>
            <div className="lead my-3">Авторские онлайн‑курсы для программистов любого уровня: и профессионалы, и
              новички найдут тут все, что ишут.
            </div>
            <div className="lead mb-0"><a href="#" className="text-white font-weight-bold">Подробнее...</a></div>
          </div>
        </div>
    );
  }
}

export default Banner;