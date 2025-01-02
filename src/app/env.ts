const env = {
  appwrite: {
    endpoint: String(process.env.NEXT_PUBLIC_HOST_URL),
    projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    api_key: String(process.env.APPWRITE_API_KEY),
  },
};

export default env;
