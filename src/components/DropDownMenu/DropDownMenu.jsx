import React from 'react';
import './DropDownMenu.modul.css'

function DropDownMenu(props) {
  return (
    <>
      <div className="nav">
          <input type="checkbox" id="menu"/>
          <label htmlFor="menu" id="nav-icon">Curent-user</label>
      
          <div className="multi-level">
              <div className="item">
                    <input type="checkbox" id="A"/>
                    <label htmlFor="A">Полезные ссылки</label>
                    <hr />
                  <div className="wrap-item">
                    <ul>
                    {/*eslint-disable-next-line */}
                        <li><a href="#">ссылка на инструкцию</a></li>
                    </ul>
                    <hr />
                  </div>
              </div>
              

              <div className="wrap-item">
                <ul className="item">
                  {/*eslint-disable-next-line */}
                  <li id="B"><a href="#">Админка</a></li>
                </ul>
                <hr />
              </div>
              
              <div className="wrap-item">
                <ul className="item">
                  {/*eslint-disable-next-line */}
                  <li id="B"><a href="#">Выход</a></li>
                </ul>
              </div>
          </div>
      </div>
    </>
  );
}

export default DropDownMenu;
