const Box = props => {
  const {className, boxText} = props
  
  return 
  <div className ={`box ${className}`}>
  <p className = "boxTitle">{boxText}</p>
  </div>
}

const element = (
  <div className = "bgContainer">
      <h1 className = "heading">Boxes</h1>
      <div className = "boxSizing">
          <Box className = "box1", boxText = "small"/>
          <Box className = "box2", boxText = "Medium"/>
          <Box className = "box3", boxText = "Large"/>
      </div>
  </div> 
)

ReactDOM.render(element, document.getElementById("root"));
