
import { AiOutlineCaretUp, AiOutlineCaretDown, AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from 'react';
import { locationItems } from './list/Navitem'
function DropDownHome(props) {
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const onDelete = props.onDelete;
    const handleDelete = () => {
        onDelete(selected)
    }
    // const [LocationList, setLocationList] = useState([
    //     {
    //         title: "Chi Nhánh Quận 1",
    //     },
    //     {
    //         title: "Chi Nhánh Quận 2",
    //     },
    //     {
    //         title: "Chi Nhánh Quận 3",
    //     },
    //     {
    //         title: "Chi Nhánh Quận 4",
    //     },
    // ]);
    return (
        <div className='relative flex flex-col items-center w-[340px] h-[340px] rounded-lg'>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <button
                onClick={() => { setIsOpen((prev) => !prev) }}

                className='bg-white p-3 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-green-800 duration-300 active:text-white'
            >
                {selected
                    ? selected?.length > 30
                        ? selected?.substring(0, 25) + '...'
                        : selected
                    : "Select Country"
                }
                {!isOpen ? (
                    <AiOutlineCaretDown className='h-8' />
                ) : (
                    <AiOutlineCaretUp className='h-8' />
                )}
            </button>
            {isOpen && (
                <div className={`bg-white w-full mt-2 overflow-y-auto rounded ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                    <div className='flex items-center px-2 sticky top-0 bg-white'>
                        <AiOutlineSearch size={18} />
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value.toLowerCase())}
                            placeholder='Enter country name'
                            className='placeholder:text-gray-700 p-2 outline-none'
                        />
                    </div>
                    {/* {locationItems?.map((country) => (
                        <li key={country?.city}
                            className={`flex w-full p-3 hover:bg-green-300 cursor-pointer justify-between  border-l-transparent hover:border-l-black border-l-4 
                        ${country?.city?.toLowerCase() === selected?.toLowerCase() && 'bg-green-500'}
                        ${country?.city?.toLowerCase().startsWith(inputValue)
                                    ? "block"
                                    : "hidden"
                                }`}
                            onClick={(event) => {
                                if (country?.city?.toLowerCase() !== selected.toLowerCase()) {
                                    setSelected(country?.city);
                                    setIsOpen(false);
                                    setInputValue("");
                                }
                            }}
                        >
                            <h3 className='font-bold'>{country.city}</h3>
                        </li>
                    ))} */}

                    {locationItems.map((country) => (
                        <li key={country.city}
                            className={`
                            flex 
                            w-full 
                            p-2 
                            hover:bg-green-300 
                            cursor-pointer 
                            justify-between  
                            border-l-transparent 
                            hover:border-l-black 
                            border-l-4 
                        ${country.city.toLowerCase().startsWith(inputValue)
                                    ? "block"
                                    : "hidden"
                                }`}
                            onClick={(event) => {
                                if (country.city.toLowerCase() !== selected.toLowerCase()) {
                                    setSelected(country.city);
                                    setIsOpen(false);
                                    setInputValue("");
                                }
                            }}
                        >
                            <h3 className='font-bold'>{country.city}</h3>
                            <h3 className={`${country.city.toLowerCase() === selected.toLowerCase()
                                ? "block"
                                : "hidden"
                                }`}
                            >
                                {country.icon}
                            </h3>
                        </li>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default DropDownHome