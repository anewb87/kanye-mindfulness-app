export const createDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  return today = mm + "/" + dd + "/" + yyyy;
};

export const createTime = () => {
  let today = new Date();
  return today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};


