function showError(error) {
  const div = document.createElement('div')
  div.classList.add('alert', 'alert-danger');
  div.innerText = error;
  document.body.append(div);
}

function getButton() {
  const errorMessage = "The application could not find a button"
  try {
    const button = document.querySelector('button');
    console.log(button.innerText);
  } catch (error) {
    console.warn(error); // Developers error
    showError(errorMessage);
  }
}

// getButton();

async function getFakeWebsiteData() {
  const errorMessage = "Data stored on a remote server could not be located"
  try {
    const response = await fetch('https://a.fake.website.com/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error);
    showError(errorMessage);
  }
}

// const data = await getFakeWebsiteData()

function getBadJSON() {
  const errorMessage = "The computer didn't understand the type of data it was given"
  try {
    function extractJSON(jsonString) {
      return JSON.parse(jsonString)
    }

    extractJSON('<div>Hello World</div>');
  } catch (error) {
    console.warn(error)
    showError(errorMessage)
  }
}

// getBadJSON();

localStorage.setItem('nice-item', '["hello", "world"]')

function getDataFromLocalStorage(key) {
  let dataToReturn = [];

  try {
    const item = localStorage.getItem(key)

    if (!item) {
      throw new Error('No items found with the key: ' + key)
    } else {
      return JSON.parse(item)
    }
  } catch (error) {
    console.warn(error);
    showError(error);
    return dataToReturn
  }
}

// async function getBadDataFromLocalStorage() {
//   const result = getDataFromLocalStorage('listOfProducts');

//   if (result.length) {
//     // Use this data
//   } else {
//     // Show a message saying there were no results
//   }

//   console.log(Array.isArray(result))

//   console.log(result.length === 0)
// }

// getBadDataFromLocalStorage()

const apiURL = 'https://jsonplaceholder.typicode.com/postsfdjh/'

async function getWrongEndpointFromRightAPI() {
  try {
    const response = await fetch(apiURL)
    const data = await response.json();
    
    if (response.ok) {
      return data
    } else {
      // do something about it
    }
    
  } catch (error) {
    // Something went wrong with the request
    showError(error)
    console.warn(error)
  }
}


function createProduct(name, price, categories) {
  if (!name) {
    throw new Error('Name is required')
  }

  if (typeof name !== 'string') {
    throw new Error('Name should be a string')
  }

  if (!price) {
    throw new Error('Price is required')
  }

  if (typeof price !== 'number') {
    throw new Error('Price should be a number')
  }

  if (!categories) {
    throw new Error('Categories is required')
  }

  if (!Array.isArray(categories)) {
    throw new Error('Categories should be an array')
  }

  return {
    name,
    price,
    categories
  }
}

const laptop = createProduct("Laptop", 2000, ['Tech', 'Apple']);

const badProduct = createProduct(30, 30, {});

console.log(badProduct)

function encodeJSON(input) {
  const string = JSON.stringify(input, null, 2)
  const pre = document.createElement('pre')
  pre.innerText = string;
  document.body.append(pre);
  return string;
}

const a = encodeJSON("123")
const b = encodeJSON(123)
const c = encodeJSON([123, "123"])
const d = encodeJSON({
  example: "Hello",
  nestedProperty: {
    abc: 123,
    hello: true
  }
})

function decodeJSON(input) {
  return JSON.parse(input)
}

console.log(d, decodeJSON(d))

