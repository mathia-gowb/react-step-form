export function FinalInfo(props){
    const finalInfoListElements=[];
    const humanReadableTitles={
        firstName:"First Name",
        lastName:"Last Name",
        email:"Email",
        phoneNumber:"Phone Number",
        telephoneNumber:"Telephone Number",
        city:"City",
        streetAddress:"Street Address",
    }
    for(const [key,value] of Object.entries(props.formInfo)){
        finalInfoListElements.push(
            <li><p className="info-title">{humanReadableTitles[key]}:</p><p className="info-detail">{value}</p></li>
        )
    }
    return (
        <div className="final-info">
            <h1>please verify your info before submiting</h1>
            <ul className="final-info-list">
                {finalInfoListElements}
            </ul> 
        </div>
    )
}