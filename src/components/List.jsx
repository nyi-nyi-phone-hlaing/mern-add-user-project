import "../index.css";
const List = (props) => {
  return (
    <>
      <ul className='list'>
        {props.userInfos.length > 0 ? (
          props.userInfos.map((user, index) => {
            return (
              <li key={index}>
                <div>
                  <h3>Name : {user.name}</h3>
                  <p>Email : {user.email}</p>
                  <p>Live : {user.live}</p>
                </div>
              </li>
            );
          })
        ) : (
          <p>No user avaliable yet!</p>
        )}
      </ul>
    </>
  );
};

export default List;
