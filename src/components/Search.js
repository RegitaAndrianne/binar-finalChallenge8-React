const Search = (props) => {
    return (
        <div>
            <label>Search Username</label>
            <input type="text" placeholder="Search"></input> 
            { props.getPlayerData.map((val,key) => {
                return <div>{val.username}</div>
            }) }
        </div>
    )
}
export default Search