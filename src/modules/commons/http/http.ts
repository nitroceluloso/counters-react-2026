export async function Get(
  path: string,
  // params: Record<string, string | number>,
) {
  try {
    const req = await fetch(path);

    if (!req.ok) {
      console.error(req.body);
    }

    return await req.json();
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error("Network error or CORS issue");
      }

      if (error instanceof SyntaxError) {
        throw new Error("Invalid JSON response from server");
      }

      // Re-lanzar errores que ya hemos personalizado
      throw error;
    }

    throw new Error("Unknown error occurred during fetch");
  }
}

export async function Post(path: string, payload: Record<string, string>) {
  try {
    const req = await fetch(path, {
      method: "post",
      body: JSON.stringify(payload),
    });

    if (!req.ok) {
      console.error(req.body);
    }

    return await req.json();
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error("Network error or CORS issue");
      }

      if (error instanceof SyntaxError) {
        throw new Error("Invalid JSON response from server");
      }

      // Re-lanzar errores que ya hemos personalizado
      throw error;
    }

    throw new Error("Unknown error occurred during fetch");
  }
}
