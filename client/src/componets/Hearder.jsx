import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/searchContext";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const Hearder = ({type}) => {
  const [destination,setDestination] = useState("");
  const [openDate,setOpenDate] = useState(false);
  const [openOptions,setOpenOptions] = useState(false);
  const [options,setOptions] = useState({
    adult:1,
    children:0,
    room:1
  });

  const navigate = useNavigate();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name,operation) =>{
    setOptions((prev)=>{
        return {
            ...prev,
            [name]: operation==="inc" ? options[name]+1 : options[name]-1,
        };
    })
  }
 
  const {dispatch} = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const handleSearch = () =>{
    dispatch({type:"NEW_SEARCH",payload:{destination,date,options}})
     navigate("/hotels", {state:{destination,date,options}})
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

       {
        type != "list" && 
        <>
        <h1 className="headerTitle">
          A lifetime of discount's. It's wonderfull, isn't it?{" "}
        </h1>
        <p className="headerDesc">
          Get rewarded from travels - unlocks instant saving of 10% with a free
          bookyourroom account.
        </p>
        {!user &&  <Link to="/login">  <button className="headerButton">Sign in / Register</button> </Link> }
            <div className="headerSearch">
          <div className="headerSeacrhItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e)=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSeacrhItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />}
            
          </div>
          <div className="headerSeacrhItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adults. ${options.children} children. ${options.room} room.`}</span>
            {openOptions && 
            <div className="options">
                <div className="optionsItem">
                    <span className="optionsText">Adult</span>
                    <div className="optionsCounter">
                    <button disabled={options.adult <=1 } className="optionsCounterButton" onClick={()=>handleOption("adult","dec")} >-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionsCounterButton" onClick={()=>handleOption("adult","inc")} >+</button>
                    </div>
                </div>
                <div className="optionsItem">
                    <span className="optionsText">Children</span>
                    <div className="optionsCounter">
                    <button disabled={options.children <=0 } className="optionsCounterButton" onClick={()=>handleOption("children","dec")} >-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionsCounterButton" onClick={()=>handleOption("children","inc")} >+</button>
                    </div>
                </div>
                <div className="optionsItem">
                    <span className="optionsText">Room</span>
                    <div className="optionsCounter">
                    <button disabled={options.room <=1 } className="optionsCounterButton" onClick={()=>handleOption("room","dec")} >-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionsCounterButton" onClick={()=>handleOption("room","inc")} >+</button>
                    </div>
                </div>
            </div>
            }
          </div>
          <div className="headerSeacrhItem">
            <button onClick={handleSearch} className="headerButton">Search</button>
          </div>
        </div>
        </>
       }
        

      </div>
    </div>
  );
};

export default Hearder;
