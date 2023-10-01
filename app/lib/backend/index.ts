export function getCachedHeaders() {
  const rawAuthData = localStorage.getItem("autData");

  if (rawAuthData) {
    try {
      return JSON.parse(rawAuthData);
    } catch (err) {
      console.error("Error parsing authData from localStorage:", err);
      return null;
    }
  }
}

export async function getQuizzles() {
  const authData = getCachedHeaders();

  const response = await fetch(`${process.env.BACKEND}/api/v1/quizzes`, {
    headers: {
      ...authData,
    },
  });

  return response.json();
}

export async function getShoppingItems() {
  const authData = getCachedHeaders();

  const response = await fetch(`${process.env.BACKEND}/api/v1/shopping_items`, {
    headers: {
      ...authData,
    },
  });

  return response.json();
}

export async function getBadges() {
  const authData = getCachedHeaders();

  const response = await fetch(`${process.env.BACKEND}/api/v1/badges`, {
    headers: {
      ...authData,
    },
  });

  return response.json();
}

export async function getQuizById(id: string) {
  const authData = getCachedHeaders();

  const response = await fetch(`${process.env.BACKEND}/api/v1/quizzes/${id}`, {
    headers: {
      ...authData,
    },
  });

  return response.json();
}

export async function submitQuiz(id: string, point_award: string) {
  const authData = getCachedHeaders();

  const response = await fetch(
    `${process.env.BACKEND}/api/v1/quizze_passed/${id}`,
    {
      method: "put",
      headers: {
        ...authData,
      },
      body: JSON.stringify({ point_award }),
    }
  );

  return response.json();
}
