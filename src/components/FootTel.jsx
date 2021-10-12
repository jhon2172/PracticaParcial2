import React, {useState, useEffect} from 'react';
import '../App.css';

const FooTel = () => {

    const [visible, setVisible] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', function(){
            if ((document.body.getBoundingClientRect()).top > scrollPos){
                setVisible(false);
            }else{
                setVisible(true);
            }
              setScrollPos((document.body.getBoundingClientRect()).top);
          });
    },[scrollPos]);

    if(!visible){
        return null;
    }

    return(
        <div className='fot'>
            <div  style = {headerStyle2.FooTel}>
                <div>
                    <svg className="gUZ B9u U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-label="Ícono de búsqueda" role="img">
                        <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                        </path>
                    </svg>
                </div>
                <div>
                    <svg className="Hn_ gUZ B9u U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                        <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
                        </path>
                    </svg>
                </div>
                
            </div>
        </div>
        
       
    );

   

};

const   headerStyle2 = {
    FooTel: {
        width: '200px',
        backgroundColor: 'white',
        borderRadius:'100px',
        height: '9vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize:'20px',
        position:'fixed',
        left:'20%',
        top:'90%'
        
      },
      
}

export default FooTel;