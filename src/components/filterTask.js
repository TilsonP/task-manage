import Search from "../assets/icons/Search";
import Reload from "../assets/icons/Reload";

const FilterTask = (props) => {

    function onChange(event) {
        props.setDate(event.target.value)
    }

    return(
        <form className="flex justify-center w-full max-w-2xl h-10 px-3 mt-8 mb-4">
            <div className="h-8 w-8 pt-1 mr-4">
                <Search color="#818181"/>
            </div>
            <div className="relative mr-4">
                <input type="date" onChange={onChange}
                       className="bg-gray-50 border border-gray-300 cursor-pointer text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="Select date"/>
            </div>
            <button className="w-7" onClick={() => props.setDate("")} type={"reset"}>
                <Reload color="#818181"/>
            </button>
        </form>
    )

}

export default FilterTask