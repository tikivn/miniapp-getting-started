const BASE_URL = "https://api.tala.xyz/miniapp/api/graphql/query";
export default async function makeGraphQLRequest(
  { query, variables },
  token = ""
) {
  return new Promise((resolve, reject) => {
    try {
      my.request({
        url: BASE_URL,
        data: { query, variables },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Tiki-Access-Token": token,
        },
        success: (res) => {
          resolve(res);
        },
        fail(e) {
          reject(e);
        },
      });
    } catch (error) {
      reject(error);
    }
  });
}
