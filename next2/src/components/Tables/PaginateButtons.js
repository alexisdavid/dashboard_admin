import React, { useEffect, useState } from 'react';

const PaginateButtons = (props) => {
    const { options,fetchData } = props;
    const [navs,setNavs]=useState([])
   useEffect(() =>{
       if (options.links.length>0) {
           setNavs(options.links)
       }
   },[props])
    return (
        <div className='justify-end'>
          
            <nav>
                <ul className="pagination">
                {navs.map((option, index)=>(
                        
                            <li className={`page-item ${option.active&&'active'}`}  key={index}>
                                <button className={`page-link ${option.url==null&&'disabled'}`} disabled={option.url==null?true:false} onClick={e=>fetchData(option.url,{})}>
                                    {index ==0?options.previous:index==(options.links.length-1)?options.next:option.label}
                                </button>
                            </li>
                       
               
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default PaginateButtons;




