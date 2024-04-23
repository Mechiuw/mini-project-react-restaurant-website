function Child(props){
    return (
      <div>
          {/* eslint-disable-next-line react/prop-types */}
          Hello my name is {props.name}! and im {props.age} years old
      </div>
    );
}

export default Child;