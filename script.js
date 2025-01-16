const byteSize = (str) => {
  const encoder = new TextEncoder();
  
  // Encode the string and get the resulting Uint8Array
  const encoded = encoder.encode(str);
  
  // The byte size is the length of the Uint8Array
  return encoded.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
