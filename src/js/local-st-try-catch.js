const setLocalSt = (key, value) => {
  try {
    const setInfo = JSON.stringify(value);
    localStorage.setItem(key, setInfo);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const getLocalSt = key => {
  try {
    const gottenInfo = localStorage.getItem(key);
    return gottenInfo === null ? undefined : JSON.parse(gottenInfo);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remLocalSt = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export { setLocalSt, getLocalSt, remLocalSt };

// if (loadDataFromLocalSt(LOCAL_ST_KEY)) {
//   Object.keys(loadDataFromLocalSt(LOCAL_ST_KEY)).map(key => {
//     if (loginForm[key]) {
//       formData[key] = loginForm[key].value =
//         loadDataFromLocalSt(LOCAL_ST_KEY)[key];
//     }
//   });
// }

// function createEmptyDataObj() {
//   return [...loginForm].reduce((dataObj, { name }) => {
//     if (name) {
//       dataObj[name] = '';
//     }

//     return dataObj;
//   }, {});
// }