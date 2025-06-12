export const ROUTE_PATH = {
  HOME: {
    PATH: () => `/`,
  },
  AUTH: {
    PATH: () => `/auth`,
    LOGIN: {
      PATH: () => `${ROUTE_PATH.AUTH.PATH()}/login`,
    },
  },
  ADMIN: {
    PATH: () => `/admin`,
    DASHBOARD: {
      PATH: () => `${ROUTE_PATH.ADMIN.PATH()}/dashboard`,
    },
  },
};
