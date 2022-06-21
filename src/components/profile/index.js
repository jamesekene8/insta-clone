// import React, { useReducer, useEffect } from "react";
// import PropTypes from "prop-types";
// import { getUserByUsername } from "../../services/firebase";
// import Header from "./header";

// const UserProfile = ({ username }) => {
//   const reducer = (state, newState) => ({ ...state, ...newState });
//   const initialState = { profile: {}, photosCollection: [], followerCount: 0 };

//   const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   useEffect(() => {
//     async function getProfileInfoAndPhotos() {
//       const [user] = await getUserByUsername(username);
//       //   const photos = getUserPhotosByUsername(username);
//       dispatch({
//         profile: user,
//         photosCollection: photos,
//         followerCount: user.followers.length,
//       });
//     }
//     getProfileInfoAndPhotos();
//   }, []);

//   return (
//     <div>
//       <Header />
//     </div>
//   );
// };

// UserProfile.propTypes = {
//   username: PropTypes.string.isRequired,
// };

// export default UserProfile;
