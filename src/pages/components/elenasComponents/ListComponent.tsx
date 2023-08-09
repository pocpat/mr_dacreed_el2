import React from "react";

const ListComponent = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
  return (
    <div className="Component">
      <h1>{props.text}</h1>
    </div>
  );
};

export default ListComponent;

// import React from "react";

// const ListComponent = ({ text }) => {
//   return <div>{text}</div>;
// };

// export default ListComponent;




