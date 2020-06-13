export const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
};

export const saveData = (key, data) => {
  console.log("save data");
  localStorage.setItem(key, JSON.stringify(data));
};
