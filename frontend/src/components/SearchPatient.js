import React from 'react'



function SearchBar({placeholder, data}) {
    function search_create_Patient(){
        let inputValue = document.getElementById("search").value;
        console.log(inputValue);
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" id="search" placeholder={placeholder}/>
                <div className='searchIcon'></div>
                <button
                    type="button" onClick="search_create_Patient()" >Seach/Create
                </button>
            </div>
            <div className="patientResult">
                {data.map((value, key) => {
                    return <div>{value.name}</div>;
                })
                }
            </div>    
        </div>
    );
}

export default SearchBar;