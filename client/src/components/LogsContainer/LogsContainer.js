import Log from "../Log/Log";

function LogsContainer(props) {
    return(
        <div className="">
            All logs will be shown...
            {props.logs ?
                (
                    <div>
                        {props.logs.length}
                    </div>
                ) 
                : 
                (
                <div>
                    No logs until now
                </div>
                )
            }

            {/* {props.logs.map((log, index) => {
                return (
                    <Log key={index} log={log}>
                    </Log>
                )
            })} */}
        </div>
    )
}

export default LogsContainer;