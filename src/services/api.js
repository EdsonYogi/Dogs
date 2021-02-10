const API_URL = "https://dogsapi.origamid.dev/json";

export const TOKEN_POST = (body) => {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE_POST = () => {
  const token = localStorage.getItem("token");
  return {
    url: `${API_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_GET = () => {
  const token = localStorage.getItem("token");
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const PHOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${API_URL}/api/photo/?_total=${total}&_page=${page}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const PHOTO_POST = (formData) => {
  const token = localStorage.getItem("token");
  return {
    url: `${API_URL}/api/photo`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
};

export const PHOTO_GET = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const PHOTO_DELETE = (id) => {
  const token = localStorage.getItem("token");
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const COMMENT_POST = (id, body) => {
  const token = localStorage.getItem("token");
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
};

export const COMMENT_GET = (id) => {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "GET",
    },
  };
};

export const PASSWORD_LOST_POST = (body) => {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const PASSWORD_RESET_POST = (body) => {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const STATS_GET = () => {
  const token = localStorage.getItem("token");
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
