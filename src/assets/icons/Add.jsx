export default function Add (props) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill={props.color ? props.color : "#52FF46"} id="ic_add_circle_24px" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5,11H13v4H11V13H7V11h4V7h2v4h4Z" transform="translate(-2 -2)"/>
        </svg>
    )

}
