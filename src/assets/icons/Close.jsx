export default function Close (props) {

  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path className="hover:fill-invalid transition-all" fill={props.color ? props.color : "#B3B3B3"} id="ic_cancel_24px" d="M12,2A10,10,0,1,0,22,12,9.991,9.991,0,0,0,12,2Zm5,13.59L15.59,17,12,13.41,8.41,17,7,15.59,10.59,12,7,8.41,8.41,7,12,10.59,15.59,7,17,8.41,13.41,12Z" transform="translate(-2 -2)"/>
      </svg>
  )

}
