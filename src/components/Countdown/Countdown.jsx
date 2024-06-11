import { React, useState, useEffect } from 'react';

const Countdown = ({id}) => {

  const calculateTimeLeft = () => {
    const difference = +new Date('2024-06-20') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="pt-2 pb-2 flex flex-col items-center justify-center min-h-200  bg-cyan-700 text-white">
      <h1 className="w-5/6 sm:w-1/3 text-center text-xl font-bold mb-2 text-amber-100"> KÖZELEG AZ INDULÁS NAPJA </h1>
      <div className="w-5/6 sm:w-1/3 text-center"> 🙈 🙈 🙈</div>
      <div className="w-5/6 sm:w-1/3 text-center text-xl">
        {Object.keys(timeLeft).length > 0 ? (
          <>
            <span className='text-3xl text-amber-100'>{timeLeft.days} </span> <span> nap </span>
            <span className='text-3xl text-amber-100'>{timeLeft.hours} </span> <span> óra </span>
            <span className='text-3xl text-amber-100'>{timeLeft.minutes} </span> <span> perc </span>
            <span className='text-3xl text-amber-100'>{timeLeft.seconds} </span> <span> másodperc </span>
          </>
        ) : (
          <span> 🎉 INDULUNK! 🎉 </span>
        )}
      </div>
    </div>
  );
};

export default Countdown;