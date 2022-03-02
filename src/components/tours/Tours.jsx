
function Tours(props) {
    return (
        <>
            {
                props.tours.map((data) => {
                    return (
                        <div>
                            <p>{data.name}</p>
                            <img src={data.image} alt="" />
                        </div>
                    )
                })
            }
        </>
    )
};
export default Tours;