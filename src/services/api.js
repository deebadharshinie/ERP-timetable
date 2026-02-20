const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper function for API calls
const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Timetable API
export const timetableAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchAPI(`/timetables${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => fetchAPI(`/timetables/${id}`),
  
  getByClass: (classId, semester) => {
    const queryString = semester ? `?semester=${semester}` : '';
    return fetchAPI(`/timetables/by-class/${classId}${queryString}`);
  },
  
  create: (data) => fetchAPI('/timetables', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  update: (id, data) => fetchAPI(`/timetables/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  delete: (id) => fetchAPI(`/timetables/${id}`, {
    method: 'DELETE',
  }),
  
  getTimeSlots: () => fetchAPI('/timetables/slots/all'),
};

// Classes API
export const classAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchAPI(`/classes${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => fetchAPI(`/classes/${id}`),
  
  create: (data) => fetchAPI('/classes', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  update: (id, data) => fetchAPI(`/classes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  delete: (id) => fetchAPI(`/classes/${id}`, {
    method: 'DELETE',
  }),
};

// Subjects API
export const subjectAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchAPI(`/subjects${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => fetchAPI(`/subjects/${id}`),
  
  create: (data) => fetchAPI('/subjects', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  update: (id, data) => fetchAPI(`/subjects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  delete: (id) => fetchAPI(`/subjects/${id}`, {
    method: 'DELETE',
  }),
};

// Faculties API
export const facultyAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchAPI(`/faculties${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => fetchAPI(`/faculties/${id}`),
  
  create: (data) => fetchAPI('/faculties', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  update: (id, data) => fetchAPI(`/faculties/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  delete: (id) => fetchAPI(`/faculties/${id}`, {
    method: 'DELETE',
  }),
};

// Rooms API
export const roomAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchAPI(`/rooms${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => fetchAPI(`/rooms/${id}`),
  
  create: (data) => fetchAPI('/rooms', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  update: (id, data) => fetchAPI(`/rooms/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  delete: (id) => fetchAPI(`/rooms/${id}`, {
    method: 'DELETE',
  }),
};

// Departments API
export const departmentAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchAPI(`/departments${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id) => fetchAPI(`/departments/${id}`),
  
  create: (data) => fetchAPI('/departments', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  update: (id, data) => fetchAPI(`/departments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  delete: (id) => fetchAPI(`/departments/${id}`, {
    method: 'DELETE',
  }),
};

export default {
  timetableAPI,
  classAPI,
  subjectAPI,
  facultyAPI,
  roomAPI,
  departmentAPI,
};
