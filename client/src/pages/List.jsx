import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Hearder from '../componets/Hearder'
import Navbar from '../componets/Navbar'
import './List.css';
import { format } from "date-fns"
import { DateRange } from "react-date-range";
import SearchItem from '../componets/SearchItem';
import useFetch from '../hooks/useFetch';


const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Hearder type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}
              </span>
              {openDate && (<DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />)}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" onChange={(e)=>setMin(e.target.value)}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" onChange={(e)=>setMax(e.target.value)} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>

          </div>
          <div className="listResult">
            {loading ? "loading" :
            <>

            {
              data.map((item)=>{
                return(
                  <SearchItem item={item}  key={item._id}/>
                )
              })
            }
            </>
          
            }
           
          </div>
        </div>
      </div>

    </div>
  )
}

export default List
