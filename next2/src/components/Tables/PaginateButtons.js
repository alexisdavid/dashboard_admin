import React, { useEffect, useState } from 'react';

const PaginateButtons = (props) => {
    const { options } = props;
    const [navs,setNavs]=useState([])
   useEffect(() =>{
       if (options.links.length>0) {
           setNavs(options.links)
       }
   },[props])
    return (
        <div className='justify-end'>
          
            <nav>
                <ul class="pagination">
                {navs.map((option, index)=>(
                        
                            <li className={`page-item ${!option.active?'disabled':'active'}`} key={index}>
                                <a className="page-link" href="#!">
                                    {index ==0?options.previous:index==(options.links.length-1)?options.next:option.label}
                                </a>
                            </li>
                       
               
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default PaginateButtons;




