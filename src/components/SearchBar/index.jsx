

const SearchBar = ({ placeholder }) => {
    return (
        <input
            type="search"
            name="taskSearch"
            placeholder={placeholder}
            className="mr-2 px-3 py-1 rounded-md bg-transparent border-2 border-blue-400 w-[250px]"
        />

    );
};

export default SearchBar;