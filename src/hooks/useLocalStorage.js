import { useEffect, useState } from "react";

function useLocalStorage(key, inValue) {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return inValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
