export default function ConditionalComponent() {
    const display = false;
    if(display){
        return( <div>
            <h3>This is a Conditional Component</h3>
        </div>
        );
    }else{
      return(<div>
        
        <h3>Code everyday!</h3>
       
    </div>
    ) 
    }
   
}