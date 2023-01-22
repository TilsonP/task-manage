export default function Check (props) {

  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
        <path fill={props.color ? props.color : "#52FF46"} id="ic_check_circle_24px" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z" transform="translate(-2 -2)"/>
      </svg>
  )

}
