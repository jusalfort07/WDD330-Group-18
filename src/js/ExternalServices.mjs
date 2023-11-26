const baseURL = import.meta.env.VITE_SERVER_URL;

async function convertToJson(res) {
  var data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw {name: "servicesError", message: data };
  }
}

export default class ExternalServices {
  constructor(category) {

  }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async checkout(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }
}
