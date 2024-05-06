const convertRoomsToArray = (videoRooms) => {
  return Object.entries(videoRooms).map(([key, value]) => ({
    id: key,
    creatorName: value.participants[0].userName,
    participants: value.participants.length,
  }));
};

export default convertRoomsToArray;
