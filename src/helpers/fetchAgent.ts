class fetchAgent {
  getData(url: string) {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url, options);
        const data = response.json();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default new fetchAgent();
