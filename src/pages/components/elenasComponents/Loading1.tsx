import React, { useEffect, useState } from 'react'
import styles from '~/styles/loading1.module.css';




// const Loading1 = () => {
//     const [percent, setPercent] = useState(0);
//     const handleInterval = () => {
//         if (percent < 100) {
//           setPercent((prevPercent) => prevPercent + 1);
//         }
//       };
    
//       useEffect(() => {
//         const interval = setInterval(handleInterval, 60);
    
//         return () => {
//           clearInterval(interval);
//         };
//       }, [percent]);
    

//   return (
//     <div>Loading1

// {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="display: none;"> */}
//   {/* <symbol id="wave">
//     <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
//     <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
//     <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
//     <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
//   </symbol> */}
// {/* </svg> */}
// <div className={styles.box}>
//       <div className={styles.percent}>
//         <div className={styles.percentNum} id="count">
//           {percent}
//         </div>
//         <div className={styles.percentB}>%</div>
//       </div>
//       <div id="water" className={styles.water}>
//         <svg viewBox="0 0 560 20" className={`${styles.water_wave} ${styles.water_wave_back}`}>
//           <use xlinkHref="#wave"></use>
//         </svg>
//         <svg viewBox="0 0 560 20" className={`${styles.water_wave} ${styles.water_wave_front}`}>
//           <use xlinkHref="#wave"></use>
//         </svg>
//       </div>
//     </div>  )
// }

// export default Loading1





const Loading1 = () => {
  const [percent, setPercent] = useState(0);

  const handleInterval = () => {
    if (percent < 100) {
      setPercent((prevPercent) => prevPercent + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleInterval, 60);

    return () => {
      clearInterval(interval);
    };
  }, [percent]);

  return (
   <div >

    <div className={styles.box}>
      <div className={styles.percent}>
        <div className={styles.percentNum} id="count">
          {percent}
        </div>
        <div className={styles.percentB}>%</div>
      </div>
      <div id="water" className={styles.water}>
        <svg viewBox="0 0 560 20" className={`${styles.water_wave ?? ''} ${styles.water_wave_back  ?? ''}`}>
          <use xlinkHref="#wave"></use>
        </svg>
        <svg viewBox="0 0 560 20" className={`${styles.water_wave  ?? ''} ${styles.water_wave_front  ?? ''}`}>
          <use xlinkHref="#wave"></use>
        </svg>
      </div>
    </div>
   </div>
  );
};

export default Loading1;


   {/* className={`${styles['loading1-container']}   ${styles['loading1-body']}`}> */}