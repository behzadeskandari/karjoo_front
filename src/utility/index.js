//region isNullOrEmpty
export function isNullOrEmpty(value) {
  return value === null || value === undefined || value === "";
}

//   // Usage examples
//   console.log(isNullOrEmpty(null));        // true
//   console.log(isNullOrEmpty(undefined));   // true
//   console.log(isNullOrEmpty(''));          // true
//   console.log(isNullOrEmpty('hello'));     // false
//   console.log(isNullOrEmpty(0));           // false
//   console.log(isNullOrEmpty([]));          // false
///////////////////////////////////////////////////////////////
//region deepClone
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Usage example
//   const original = { a: 1, b: { c: 2 } };
//   const clone = deepClone(original);
//   clone.b.c = 3;

//   console.log(original.b.c); // 2
//   console.log(clone.b.c);    // 3

///////////////////////////////////////////////////////////////
//region debounce
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage example
//   const handleResize = debounce(() => {
//     console.log('Resize event!');
//   }, 200);

//   window.addEventListener('resize', handleResize);

///////////////////////////////////////////////////////////////
//region throttle
export function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Usage example
//   const handleScroll = throttle(() => {
//     console.log('Scroll event!');
//   }, 200);

//   window.addEventListener('scroll', handleScroll);
///////////////////////////////////////////////////////////////
//region getQueryParams
export function getQueryParams(url) {
  const params = {};
  new URL(url).searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

// // Usage example
// const url = "https://example.com?page=1&sort=asc";
// const params = getQueryParams(url);
// console.log(params); // { page: '1', sort: 'asc' }

///////////////////////////////////////////////////////////////
//region isEmptyObject
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// Usage example
//   console.log(isEmptyObject({}));           // true
//   console.log(isEmptyObject({ a: 1 }));     // false
///////////////////////////////////////////////////////////////
//region generateUUID
export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Usage example
//   console.log(generateUUID()); // e.g., '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
///////////////////////////////////////////////////////////////
//region capitalizeFirstLetter
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Usage example
//   console.log(capitalizeFirstLetter('hello')); // 'Hello'
///////////////////////////////////////////////////////////////
//region flattenArray
export function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
    );
  }, []);
}

// Usage example
//   console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]

///////////////////////////////////////////////////////////////
//region getCookie
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Usage example
//   console.log(getCookie('username')); // e.g., 'john_doe'
///////////////////////////////////////////////////////////////
//region setCookie
export function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Usage example
//   setCookie('username', 'john_doe', 7);
///////////////////////////////////////////////////////////////
//region deleteCookie
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Usage example
//   deleteCookie('username');
///////////////////////////////////////////////////////////////
//region copyToClipboard
export function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// Usage example
// copyToClipboard('Hello, World!');
///////////////////////////////////////////////////////////////
//region isMobileDevice
export function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// Usage example
//   console.log(isMobileDevice()); // true or false
///////////////////////////////////////////////////////////////
//region formatDate
export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}
// Usage example
//   console.log(formatDate(new Date())); // e.g., 'June 14, 2024'
///////////////////////////////////////////////////////////////
//region getRandomInt
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage example
//console.log(getRandomInt(1, 100)); // e.g., 42
///////////////////////////////////////////////////////////////
//region scrollToTop
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Usage example
//   scrollToTop();
///////////////////////////////////////////////////////////////
//region isInViewport
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Usage example
//   const element = document.getElementById('myElement');
//   console.log(isInViewport(element)); // true or false
///////////////////////////////////////////////////////////////
//region getOffset
export function getOffset(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
}

//   // Usage example
//   const element = document.getElementById('myElement');
//   console.log(getOffset(element)); // { top: 200, left: 150 }

///////////////////////////////////////////////////////////////
//region scrollToPosition
export function scrollToPosition(x, y) {
  window.scrollTo({ top: y, left: x, behavior: "smooth" });
}

// Usage example
//   scrollToPosition(0, 500); // Scrolls to 500 pixels down the page

//region generateGUID
export function generateGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Usage example
//   console.log(generateGUID()); // e.g., '3f0e8a2b-9c27-4fcd-ae1c-8b7bffe1f980'

///////////////////////////////////////////////////////////////

//region setLocalStorage
export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
///////////////////////////////////////////////////////////////

//region getLocalStorage
export function getLocalStorage(key) {
  return localStorage.getItem(key);
}
///////////////////////////////////////////////////////////////

//region removeLocalStorage
export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}
///////////////////////////////////////////////////////////////

//region clearLocalStorage
export function clearLocalStorage() {
  localStorage.clear();
}
///////////////////////////////////////////////////////////////

//region LocalStorageLength
export function LocalStorageLength() {
  return localStorage.length;
}
