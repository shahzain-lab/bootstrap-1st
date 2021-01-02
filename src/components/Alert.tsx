import React from 'react';
import Alert from 'react-bootstrap/Alert';


export const AlertDiv =()=> {
    return(
        <div className="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Oh snap! You got an error!</strong> 
      <p> 
        Change this and that and try again.
      </p>
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    
       <Alert dismissible variant="danger">
       <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
       <p>
         Change this and that and try again.
       </p>
     </Alert>
     </div>
    )
}

