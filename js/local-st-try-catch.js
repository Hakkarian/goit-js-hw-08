//we're calling a function, in which...
const setLocalSt = (key, value) => {
  // we're surrounding stringify-parsing
  // manipulation with try and catch block in case of errors
  try {
    //we're stringifying some value, putting him into a variable
    const setInfo = JSON.stringify(value);
    //stringified information we're setting into the local storage, with property of a key
    localStorage.setItem(key, setInfo);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const getLocalSt = key => {
  try {
    //(sorry, im tired) 
    //gotten info equals nothing - it is undefined, OTHERWISE it is parsed to an object
    const gottenInfo = localStorage.getItem(key);
    return gottenInfo === null ? undefined : JSON.parse(gottenInfo);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remLocalSt = key => {
  try {
    // we're removing the info from the local storage
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
// and exporting to the crucial file
export { setLocalSt, getLocalSt, remLocalSt };
