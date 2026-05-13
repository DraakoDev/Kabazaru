const API = "http://localhost:3000";

export const getPersonas = async (token) => {
  const response = await fetch(`${API}/personas`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return response.json();
};

export const getUsuarios = async (token) => {
  const response = await fetch(`${API}/usuarios`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return response.json();
};

export const getVendedores = async (token) => {
  const response = await fetch(`${API}/personas/vendedores/list`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  return response.json();
};