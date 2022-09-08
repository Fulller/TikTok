import Header from "../component/Header";
function HeaderOnly ({children}){
    return (
        <div className="Container">
            <Header></Header>
            <div className="Content">
                {children}
            </div>
        </div>
    )
}
export default HeaderOnly