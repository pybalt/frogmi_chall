import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export const FilterBar = ({setFilter}) => {
    const [filterOptions, setFilterOptions] = useState([
        {value: 'md', bool: false},
        {value: 'ml', bool: false},
        {value: 'ms', bool: false},
        {value: 'mw', bool: false},
        {value: 'me', bool: false},
        {value: 'mi', bool: false},
        {value: 'mb', bool: false},
        {value: 'mlg', bool: false}
      ])
    
    const [triggerSearch, setTriggerSearch] = useState(false)

    const handleSearchClick = () => {
    setTriggerSearch(p => !p);
    }


    const switchFilter = (index) => {
    const newFilterOptions = [...filterOptions];
    newFilterOptions[index].bool = !newFilterOptions[index].bool;
    setFilterOptions(newFilterOptions);
    }


    useEffect(() => {
        const filterValues = filterOptions.filter(option => option.bool).map(option => option.value)
        setFilter(filterValues)
    }, [triggerSearch]);

    return (        
    <div className="flex items-center gap-2">
        <Button onClick={handleSearchClick}>
        <SearchIcon className="w-4 h-4 fill-gray-500" />
        </Button>
        {filterOptions.map((option, index) => {
        return (
            <Button
            key={index}
            size="sm"
            variant={option.bool ? '' : 'outline'}
            onClick={() => switchFilter(index)}
            >
            {option.value}
            </Button>
        )
        })}
  </div>
)
}


function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  }
  