import React, { Component } from 'react';
import './morning.css';
export default class Morning extends Component {
  render() {
    return (
      <div className='morning'>
        <div className='column'>
          <div class="morning-user">
          <h2>Good Morning, <span>Daniel Bruk</span></h2>
          <p>Have a nice day at work</p>
        </div></div>
        <div className='column position'>
							<div class="morning-img">
								<img src="https://preclinic.dreamstechnologies.com/html/template/assets/img/morning-img-01.png" alt="" className='img'/>
							</div>
						
        </div>
      </div>
    )
  }
}
